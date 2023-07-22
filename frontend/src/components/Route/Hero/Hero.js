import React from "react";
import styles from "../../../style/style";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[78.8vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-slate-800 font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[420] text-slate-700">
          Home decoration is an art that transforms a house into a haven. It's
          about curating a collection of elements that harmonize and create a
          welcoming atmosphere. Each piece chosen with care adds its own touch
          of beauty and personality. From furniture to colors, accessories to
          textiles, every detail plays a role in shaping the overall ambiance.
          It's a journey of self-expression and creativity, where a space
          becomes a reflection of one's style and taste. The best home
          decoration collection is a symphony of carefully curated pieces that
          bring joy, comfort, and a sense of belonging.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
