// We create a Mongo db schema for this variable
// Copy from mongoose docs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MailSchema = new Schema({
  date: { type: Date, required: true },
  email: { type: String, required: true },
//   receivePromos: { type: Boolean, required: false },
//   thumb: { type: Boolean, required: false },
//   contact: { type: String, required: false }
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const Mail = mongoose.model("Mail", MailSchema);

// Send it:
module.exports = Mail;