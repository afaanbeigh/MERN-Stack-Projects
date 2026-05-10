const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema(
  {
    text:     { type: String, required: true },
    senderID: { type: String, required: true }
  },
  { timestamps: true }
);

const Message = model('Message', messageSchema);

module.exports = Message;