import React, { useEffect, useState } from "react";

const Products_list_ = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3000/get-product");
    result = await result.json();
    setProducts(result);
  };

  console.log(products);

  return (
    <div className="product-list">
      <h1>Products List</h1>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li> 
        <li>Company</li>
      </ul>

      {products.map((ele, index) => {
        return <ul key={index}>
          <li>{index + 1}</li>
          <li>{ele.name}</li>
          <li>{ele.price}</li>
          <li>{ele.category}</li>
          <li>{ele.company}</li>
        </ul>;
      })}
    </div>
  );
};

export default Products_list_;
