import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetail();
  }, []);
   const getProductDetail = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:3000/product/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price); 
    setCategory(result.category);
    setCompany(result.company);
 };

  const Update = async () => {
    console.log(name, price, company, category);
    let result = await fetch(`http://localhost:3000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, company, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/");
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Inter Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Inter Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Inter Product Categary"
        className="inputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Inter Product Company"
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />

      <button onClick={Update} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
