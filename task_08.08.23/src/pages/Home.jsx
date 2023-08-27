import React from "react";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
function Home() {
  const { data, error, loading } = useSelector((state) => state.products);

  return (
    <div className="container">
      <h1>Products list</h1>
      {loading ? <h3>Loading... </h3> : <ProductList dataToList={data} />}
    </div>
  );
}

export default Home;
