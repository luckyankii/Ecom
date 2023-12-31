import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct";
function ProductDetailsPage() {
  const { name } = useParams();
  console.log(name);
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " "); // this se from seo friendly only
  console.log(productName);
  useEffect(() => {
    const data = productData.find((i) => i.name === productName); // This will return object
    setData(data);
    window.scrollTo(0, 0);
  }, [name]);
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
