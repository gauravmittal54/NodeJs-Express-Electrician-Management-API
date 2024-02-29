const Sites = require("../models/Sites");
const Electrician = require("../models/Electrician");
const distributeTasks = require("../helperMethods/distributeTasks");

exports.createSite = async (req, res) => {
  try {
    const { site_id, date, status, assigned_electrician_id } = req.body;

    if (!site_id || !date || !status) {
      return res.status(400).json({ error: "Invalid input parameters" });
    }

    if (!Number.isInteger(Number(site_id))) {
      return res
        .status(400)
        .json({
          error:
            "Invalid value for site_id or assigned_electrician_id. Must be a valid integer.",
        });
    }

    const existingSite = await Sites.findOne({ site_id });
    if (existingSite) {
      return res
        .status(409)
        .json({ error: "Site with this ID already exists" });
    }

    if (assigned_electrician_id != undefined) {
      console.log("HHH");
      const existingElectrician = await Electrician.findOne({
        electrician_id: assigned_electrician_id,
      });
      if (!existingElectrician) {
        return res
          .status(404)
          .json({ error: "Electrician with this ID does not exist" });
      }
    }

    const newSite = await Sites.create({
      site_id,
      date,
      status,
      assigned_electrician_id,
    });

    return res.status(201).json(newSite);
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.assignSitesToElectricians = async (req, res) => {
  try {
    const availableElectricians = await Electrician.find({ status: "active" });

    const availableSites = await Sites.find({ assigned_electrician_id: null });

    if (availableElectricians.length === 0 || availableSites.length === 0) {
      return res
        .status(400)
        .json({ error: "No available electricians or sites for assignment" });
    }

    const assignments = distributeTasks(
      availableSites.length,
      availableElectricians.length
    );
    console.log(assignments);

    const siteAssignments = {};

    for (let i = 0; i < availableElectricians.length; i++) {
      const electrician = availableElectricians[i];
      const assignedSites = availableSites.splice(
        0,
        assignments[`worker${i + 1}`]
      );

      await Sites.updateMany(
        { _id: { $in: assignedSites.map((site) => site._id) } },
        { assigned_electrician_id: electrician.electrician_id }
      );

      siteAssignments[`worker${i + 1}`] = assignedSites.map((site) => ({
        site_id: site.site_id,
        assigned_electrician_id: electrician.electrician_id,
      }));
    }

    return res
      .status(200)
      .json({
        message: "Sites assigned to electricians successfully",
        siteAssignments,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
