import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style/style";

function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const submitHandle = (obj) => {
    navigate(`/products/?category=${obj.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-lg shadow-sm">
      {categoriesData &&
        categoriesData.map((obj, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => submitHandle(obj)}
          >
            <img
              src={obj.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none">{obj.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default DropDown;

//   navigate(`/products/?category=${obj.title}`);
//  navigate(`/products/category=${obj.title}`); first time i have done like this causes to much problems