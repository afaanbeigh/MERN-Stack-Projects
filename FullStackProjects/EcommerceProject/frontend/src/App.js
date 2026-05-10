import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const API = "http://localhost:3001/api/prdcts";
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  const createProduct = async () => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price })
    });
    setName("");
    setPrice("");
    getProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(API + "/" + id, {
      method: "DELETE"
    });
    getProducts();
  };

  const updateProduct = async (id) => {
    const name = prompt("New Name");
    const price = prompt("New Price");
    await fetch(API + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price })
    });
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Add Product</h2>
      <div className="form-row">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="btn-add" onClick={createProduct}>
        Add
      </button>

      <h2>Products</h2>
      <div className="product-list">
        {products.map((p) => (
          <div className="product-item" key={p._id}>
            <span className="product-name">{p.name}</span>
            <span className="product-price">{p.price}</span>
            <button className="btn-update" onClick={() => updateProduct(p._id)}>
              Update
            </button>
            <button className="btn-delete" onClick={() => deleteProduct(p._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;