import React from "react";
import styles from "../../style/style";
import CountDown from "./CountDown";

function EventCard({ active }) {
  return (
    <div
      className={`w-full block bg-white rounded-lg lg:flex p-5 ${active}? "unset":"mb-12"`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
          alt=""
        />
      </div>
      <div className="w-full   flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>I Phone Pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis magni
          nobis architecto dolores odio qui exercitationem a, molestias porro
          deserunt culpa labore quisquam, sed esse veritatis aut! Consequatur,
          officia nulla? Cum corrupti aspernatur veritatis obcaecati odit,
          provident cumque nisi asperiores fuga dolor ipsum quod praesentium
          perferendis fugit ex tempora facere. Odio deserunt rerum quae quos,
          natus quo eaque. Nobis, quod?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              $ 1000
            </h5>
            <h5 className="font-bold text-[20px] text-[#333]">$ 899</h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-teal-400">
            {" "}
            120 sold{" "}
          </span>
        </div>
        <div>
          <CountDown />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
