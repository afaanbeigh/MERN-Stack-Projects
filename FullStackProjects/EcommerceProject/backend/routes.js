const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('./controller');

router.post('/prdcts', createProduct);

router.get('/prdcts', getProducts);

router.put('/prdcts/:pid', updateProduct);

router.delete('/prdcts/:pid', deleteProduct);

module.exports = router;