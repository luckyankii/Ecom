import React from "react";
import logo from "../../Assests/Logo.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-slate-700 text-white">
      {/* ------------------- Subscribe and news logic ------------------------------- */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 bg-slate-600">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal">
          <span className="text-teal-400">Subscribe</span> us for news
          <br /> Events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter Your Email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-600 duration-300 px-5 py-2 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      {/* ------------------- Link ans company name logo ------------------------------*/}
      <div className="grid grid-cols1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        {/* --logo-- */}
        <ul className="px-5 text-center flex flex-col items-center sm:text-start  sm:block  ">
          <img
            src={logo}
            alt=""
            style={{ filter: "brightness(1) invert(1)" }}
            // this is how we will change color of image
            className="w-[80px]"
          />
          <br />
          <p>The Home and elements needed to create beautiful Products</p>
          {/* -- icons of social media--- */}
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className={`cursor-pointer `} />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>
        {/* --company-- */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((obj) => {
            return (
              <li key={obj.name}>
                <Link
                  to={obj.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                >
                  {obj.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* -- Shop --- */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((obj) => {
            return (
              <li key={obj.name}>
                <Link
                  to={obj.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                >
                  {obj.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* -- support --*/}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((obj) => {
            return (
              <li key={obj.name}>
                <Link
                  to={obj.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                >
                  {obj.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* ---------------- copy right section ------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-col2 lg:grid-cols-3 gap:10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 Manish Shop. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

// md:flex -> say like this display flex upto mid screen then display block by default
/* 

THe filter property in CSS can be used to apply a variety of filters to an element, such as brightness, invert, sepia, and blur. The following are some of the important props that you can use with the filter property:

brightness: 
This prop controls the brightness of the element. A value of 1 means that the element will be displayed at its normal brightness, while a value of 0 means that the element will be displayed as black.

invert: 
This prop inverts the colors of the element. A value of 1 means that the element will be displayed with its colors inverted, while a value of 0 means that the element will be displayed with its normal colors.

sepia: 
This prop applies a sepia tone to the element. A value of 1 means that the element will be displayed with a sepia tone, while a value of 0 means that the element will be displayed with its normal colors.

blur: 
This prop blurs the element. A value of 0 means that the element will be displayed with no blur, while a larger value will result in a more blurred element.

*/
