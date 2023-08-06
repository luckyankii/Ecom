import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../style/style";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
function Wishlist({ setOpenWishlist }) {
  const cartdata = [
    {
      name: "Iphone 14 pro max  256 gb ssd and 8gb ram silver colour",
      description: "test",
      price: 1000,
    },
    {
      name: "Iphone 14 pro max  256 gb ssd and 8gb ram silver colour",
      description: "test",
      price: 10000,
    },
    {
      name: "Iphone 14 pro max  256 gb ssd and 8gb ram silver colour",
      description: "test",
      price: 10000,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        {/* --- item length */}
        <div className={`${styles.noramlFlex} p-4 `}>
          <AiOutlineHeart size={25} color="red" />
          <h5 className="pl-2 text-[20px] font-[500]"> 3 items</h5>
        </div>

        {/* ---- cart items */}
        <br />
        <div>
          {cartdata &&
            cartdata.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>
      </div>
    </div>
  );
}
const CartSingle = ({ data }) => {
  const [value, setvalue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer " />
        <img
          src={`https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            ₹{totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            tile="Add to cart"
            // onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
