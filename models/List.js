const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    Ttile: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
