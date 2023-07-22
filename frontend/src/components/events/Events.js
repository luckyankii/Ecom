import React from "react";
import styles from "../../style/style";
import EventCard from "./EventCard.js";
function Events() {
  return (
    <div className="mt-10">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Events </h1>
        </div>
        <div className="w-full grid">
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default Events;
