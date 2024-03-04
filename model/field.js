const validator = require("validator");
const mongoose = require('mongoose');
const fieldSchema = new mongoose.Schema({
  roleList: {
    type: String,
    require: [true, "RoleList is must"],
  },
  selectPartyType: {
    type: String,
  },
  selectRegistrationType: {
    type: String,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
  GstNumber: {
    type: Number,
  },
  emailId: {
    type: String,
    unique: true,
    required: true,
    validata: [validator.isEmail, "please provide a valid email"]
  },
  password: {
    type: String,
    minlength: 8,
  },
  ceoTagging: {
    type: String,
  },
  dealsinProduct: {
    type: String,
  },
  annualTurnOver: {
    type: Number,
  },
});

const Field = mongoose.model("Customer",fieldSchema);
module.exports = Field;
