import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../style/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
function ProductDetails({ data }) {
  console.log(data);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data?.image_Url[select].url} alt="" />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => {
                        setSelect(0);
                      }}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => {
                        setSelect(1);
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* ----  increment button and dec button */}
              <div className="w-full 800px:w-[50%]">
                <h1 className={`${styles.heading}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data?.discount_price} $
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? "$" + data.price : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-3 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-300  text-gray-800 font-medium px-6 py-[15px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-3 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>

                  {click ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer "
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer"
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Add to wishlist"
                    />
                  )}
                </div>
                <div
                  className={`${styles.button} mt-6 rounded-md flex items-center h-11`}
                >
                  <span className="text-white flex items-center">
                    Add to cart{" "}
                    <AiOutlineShoppingCart className="ml-1 text-white" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <img
                    src={data?.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      {data.shop.ratings} Ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 rounded h-11 ml-8`}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --- Product details info  */}

          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
}

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={`text-[#000] text-[18px] cursor-pointer 800px:text-[20px]`}
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`text-[#000] text-[18px] cursor-pointer 800px:text-[20px]`}
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`text-[#000] text-[18px] cursor-pointer 800px:text-[20px]`}
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            laborum quibusdam voluptas impedit voluptatum? Molestias eos
            exercitationem doloribus accusantium fugit excepturi commodi
            perferendis placeat, minus pariatur eaque incidunt est impedit? Ab
            illo ipsam modi culpa officiis. Similique necessitatibus animi
            ratione esse dignissimos neque in laborum atque, aperiam laboriosam
            iusto quod, suscipit recusandae labore. Pariatur assumenda doloribus
            corporis commodi hic cum. Temporibus similique deserunt fugit ut
            dicta. Dolorem quisquam est provident numquam optio vel soluta autem
            sint temporibus, rem ipsam animi nihil rerum commodi exercitationem
            consequuntur quia voluptatem. Suscipit, voluptas odio. Esse
            quibusdam deleniti perferendis sapiente dolor iure rem sequi sint!
            Magni expedita, impedit error et libero neque consequuntur. Totam
            modi dicta, eaque quaerat eum iusto labore odit. Recusandae, minus
            hic. Voluptatum, nisi quibusdam? Illum non dolore recusandae rem.
            Officiis amet earum aliquid repudiandae autem omnis, quos explicabo
            recusandae libero, hic fugiat consequatur assumenda deleniti quaerat
            saepe quis eius optio aliquam? Laborum accusantium, corrupti esse
            explicabo et nobis incidunt. Ipsa necessitatibus molestiae hic
            repellendus unde dolorum doloremque eligendi vitae corrupti ad
            incidunt, natus iure, dicta totam delectus at eveniet?
            Exercitationem, praesentium. Magnam officia culpa quam veniam.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure esse
            officiis hic quam tempora nobis labore laboriosam eius facere
            suscipit, reiciendis dicta nisi assumenda ullam ex perspiciatis
            recusandae cupiditate ipsa! In accusantium aliquid facere soluta
            maxime commodi omnis optio nisi exercitationem, repudiandae
            aspernatur quos, perferendis totam, voluptates beatae aut ipsum. Nam
            accusantium, atque magnam quam ad tenetur quidem sapiente molestias?
            Doloribus magnam maiores dicta atque consectetur labore pariatur
            illum ipsum modi officia distinctio unde aliquam aperiam, voluptatem
            vel ducimus placeat odio, incidunt provident quasi consequatur
            impedit. Aut in error molestiae.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure esse
            officiis hic quam tempora nobis labore laboriosam eius facere
            suscipit, reiciendis dicta nisi assumenda ullam ex perspiciatis
            recusandae cupiditate ipsa! In accusantium aliquid facere soluta
            maxime commodi omnis optio nisi exercitationem, repudiandae
            aspernatur quos, perferendis totam, voluptates beatae aut ipsum. Nam
            accusantium, atque magnam quam ad tenetur quidem sapiente molestias?
            Doloribus magnam maiores dicta atque consectetur labore pariatur
            illum ipsum modi officia distinctio unde aliquam aperiam, voluptatem
            vel ducimus placeat odio, incidunt provident quasi consequatur
            impedit. Aut in error molestiae.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <di className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Reviews yet!</p>
        </di>
      ) : null}

      {active === 3 ? (
        <di className="w-full block 800px:flex p-5 ">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  ({data.shop.ratings}) Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              incidunt, aperiam dolorem aliquam amet harum, autem voluptate
              laudantium porro ratione mollitia nostrum repellendus. Magnam
              excepturi recusandae unde deleniti mollitia obcaecati. Iusto
              officiis eum sit voluptate vitae eveniet ullam optio, cum
              asperiores nulla nam quos! Eos ex, ducimus, aspernatur deleniti
              quibusdam minus molestias illo id voluptas commodi, nam
              consequuntur iusto accusantium?
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[400]"> 14 March ,2023</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total products : <span className="font-[400]"> 1120</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews: <span className="font-[400]"> 15</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[40px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white"> Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </di>
      ) : null}
    </div>
  );
};
export default ProductDetails;
