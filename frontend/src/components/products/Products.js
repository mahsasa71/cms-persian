import React, { useEffect, useState } from "react";

import AddNewProduct from '../addNewProduct/AddNewProduct'
import ProductsTable from '../productsTable/ProductsTable'


export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };
  return (
    <>
   
   <>
      <AddNewProduct getAllProducts={getAllProducts} />
      <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts} />
    </>
    </>
   
  )
}
