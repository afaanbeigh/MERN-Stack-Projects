const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number
});

const prodt = model('Product', productSchema);

module.exports = prodt;