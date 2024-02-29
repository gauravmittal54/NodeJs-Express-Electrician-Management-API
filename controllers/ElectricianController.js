const Electrician = require("../models/Electrician");
const Sites = require("../models/Sites");

exports.createElectrician = async (req, res) => {
  try {
    const { electrician_id, name, status } = req.body;

    if (!electrician_id || !name || !status) {
      return res.status(400).json({ error: "Invalid input parameters" });
    }

    if (!Number.isInteger(Number(electrician_id))) {
      return res
        .status(400)
        .json({
          error: "Invalid value for electrician_id. Must be a valid integer.",
        });
    }

    const existingElectrician = await Electrician.findOne({ electrician_id });
    if (existingElectrician) {
      return res
        .status(409)
        .json({ error: "Electrician with this ID already exists" });
    }

    const newElectrician = await Electrician.create({
      electrician_id,
      name,
      status,
    });

    return res.status(201).json(newElectrician);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
