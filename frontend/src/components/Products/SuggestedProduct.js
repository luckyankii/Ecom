import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import styles from "../../style/style";
import ProductCard from "../Route/productcard/ProductCard";
import { Outlet } from "react-router-dom";
function SuggestedProduct({ data }) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);
    setProducts(d);
  }, []);
  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2 className={`${styles.heading}`}>Related Products</h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {productData &&
              productData.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SuggestedProduct;
