import React from "react";
import styles from "../../../style/style";
import { productData } from "../../../static/data";
import ProductCard from "../productcard/ProductCard";

function FeatureProducts() {
  return (
    <div className="pt-4 mt-4 mb-3">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products </h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] ">
          {productData &&
            productData.map((obj, idx) => <ProductCard data={obj} key={idx} />)}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
