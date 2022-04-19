import React from "react";
import Link from "next/link";
import classes from "./styles/EventItem.module.css";

// Components
import Button from "../ui/Button";

const EventItem = ({ title, image, date, location, id }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreEventLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreEventLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
