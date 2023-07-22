import React from "react";
import styles from "../../style/style";
import { brandingData, categoriesData } from "../../static/data";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <>
      {/* ---------Maping Branding Data ---------------------- */}
      <div className={` ${styles.section} hidden sm:block shadow-sm`}>
        <div
          className={`branding my-12 flex justify-between items-center w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((obj, idx) => {
              return (
                <div
                  className="flex items-start gap-1 justify-between"
                  key={idx}
                >
                  <div className="mt-2"> {obj.icon}</div>
                  <div className="px-3">
                    <h3 className="font-bold text-sm md:text-base ">
                      {obj.title}
                    </h3>
                    <p className="text-xs md:text-sm">{obj.Description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* ------------- 2nd Div -------------------- */}
      <div
        className={` ${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] ">
          {categoriesData &&
            categoriesData.map((obj) => {
              const handleSubmit = (obj) => {
                navigate(`/products?category=${obj.title}`);
                // window.location.reload();
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={obj.id}
                  onClick={() => handleSubmit(obj)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{obj.title}</h5>
                  <img
                    src={obj.image_Url}
                    alt=""
                    className={`w-[100px] object-cover`}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Categories;
