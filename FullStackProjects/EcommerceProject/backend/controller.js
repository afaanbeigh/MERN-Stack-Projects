const prdt = require('./model');

const createProduct = async (req, res) => {
  const pdt = await prdt.create(req.body);
  res.json(pdt);
};

const getProducts = async (req, res) => {
  const pdts = await prdt.find();
  res.json(pdts);
};

const updateProduct = async (req, res) => {
  const pd = await prdt.findByIdAndUpdate(
    req.params.pid,
    req.body,
    { new: true }
  );

  res.json(pd);
};

const deleteProduct = async (req, res) => {
  const pt = await prdt.findByIdAndDelete(req.params.pid);
  res.json(pt);
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
};