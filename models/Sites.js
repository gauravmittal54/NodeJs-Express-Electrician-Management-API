const mongoose = require("mongoose");

const SitesTableSchema = new mongoose.Schema(
  {
    site_id: {
      type: Number,
      unique: true,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value for site_id.",
      },
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      required: true,
    },
    assigned_electrician_id: {
      type: mongoose.Schema.Types.Number,
      ref: "Electrician",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Site", SitesTableSchema);
