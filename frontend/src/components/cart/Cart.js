import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../style/style";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
function Cart({ setOpenCart }) {
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
            onClick={() => setOpenCart(false)}
          />
        </div>
        {/* --- item length */}
        <div className={`${styles.noramlFlex} p-4 `}>
          <IoBagHandleOutline size={25} />
          <h5 className="pl-2 text-[20px] font-[500]"> 3 items</h5>
        </div>

        {/* ---- cart items */}
        <br />
        <div>
          {cartdata &&
            cartdata.map((i, index) => <CartSingle key={index} data={i} />)}
          <div className="px-5 mb-3 mt-5">
            {/* checkout buttons */}
            <Link to="/checkout">
              <div
                className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
              >
                <h1 className="text-[#fff] text-[18px] font-[600]">
                  Checkout Now (₹100000)
                </h1>
              </div>
            </Link>
          </div>
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
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setvalue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setvalue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={`https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.discountPrice} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            ₹{totalPrice}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer"
          //   onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};
export default Cart;
