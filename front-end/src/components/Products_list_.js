import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:3000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      alert("product deleted");
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:3000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h1>Products List</h1>
      <input
        type=""
        className="search-product-box"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>

      {products.length > 0 ? (
        products.map((ele, index) => {
          return (
            <ul key={index}>
              <li>{index + 1}</li>
              <li>{ele.name}</li>
              <li>{ele.price}</li>
              <li>{ele.category}</li>
              <li>{ele.company}</li>
              <li>
                <button onClick={() => deleteProduct(ele._id)}>Delete</button>
                <button><Link to={"/update/" + ele._id}> Update </Link></button>
                
              </li>
            </ul>
          );
        })
      ) : (
        <h1>No result found</h1>
      )}
    </div>
  );
};

export default Products_list_;
