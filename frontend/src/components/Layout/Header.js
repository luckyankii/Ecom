import React, { useState } from "react";
import styles from "../../style/style";
import { Link } from "react-router-dom";
import logo from "../../Assests/Logo.png";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown.js";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";
function Header({ activeHeading }) {
  const [searchterm, SetSearchTerm] = useState("");
  const [SearchData, SetSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleSearchChange = (e) => {
    // We have created a search filter
    const term = e.target.value;
    SetSearchTerm(term);
    const filterProduct =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    SetSearchData(filterProduct.length > 0 ? filterProduct : null);

    // Here is logic of set active for navabar
    // This type of function(window.something) is commonly used when you want to track or respond to specific events happening in the browser window or document
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else setActive(false);
  });
  return (
    <>
      {/* ------------------  Logo and input search bar and button------------------------------ */}
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[24px] 800px:flex items-center justify-between">
          {/* -----Logo--------- */}
          <div>
            <Link to="/">
              <img src={logo} alt="" className="h-[80px]" />
            </Link>
          </div>
          {/* input search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchterm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-4 border-slate-500 border-[2px] rounded-lg placeholder-slate-600"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />{" "}
            {SearchData && SearchData.length !== 0 && searchterm !== "" ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm z-[9] p-4 rounded-md">
                {SearchData &&
                  SearchData.map((obj, idx) => {
                    const d = obj.name;
                    const product_name = d.replace(/\s+/g, "-"); // this is for removing spaces
                    return (
                      <Link to={`/product/${product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={obj.image_Url[0].url}
                            alt=""
                            className="h-[40px] w-[40px] mr-[10px]"
                          />
                          <h1>{obj.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          {/* ---Seller button--- */}
          <div className={`${styles.button}`}>
            <Link to={`/seller"}`}>
              <h1 className="text-[#fff]  flex items-center justify-center">
                Seller
                <IoIosArrowForward className="ml-3" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      {/* -- 2nd element Dropdown and Navbar ---- -- */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full  h-[70px]  bg-slate-600`}
        // bg-[#3321c8] color used
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* ----------Categories------- */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={31} className="absolute left-6 top-3" />
              <button className="h-full w-full flex justify-center items-center pl-1 bg-white font-sans text-lg font-[500] select-none rounded-t-lg">
                {" "}
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown === true ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* ----------Navitems from Navbar component ----------------- */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          {/* --------Add to cart and likes ------------- */}
          <div className="flex">
            {/* ----Likes--------- */}
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                // onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-rose-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {1}
                </span>
              </div>
            </div>
            {/* ---------Add to Cart ----------- */}
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                // onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full  bg-teal-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {0}
                </span>
              </div>
            </div>
            {/*-----------User Profile pic ------------- */}
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                // onClick={() => setOpenCart(true)}
              >
                <Link to="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              </div>
            </div>
            {/* --- continue----- */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

/*
Box model :->
margin border padding context 

width ->  border+padding +context  // context box 
// boder box 
[   
]



*/
