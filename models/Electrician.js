const mongoose = require("mongoose");

const ElectricianTableSchema = new mongoose.Schema(
  {
    electrician_id: {
      type: Number,
      unique: true,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value for electrician_id.",
      },
    },
    name: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    versionKey: "customVersionKey",
    timestamps: {
      createdAt: "customCreatedAt",
      updatedAt: "customUpdatedAt",
    },
  }
);

module.exports = mongoose.model("Electrician", ElectricianTableSchema);
