import React from "react";
// import Button from "../ui/button";
// import DateIcon from "../icons/date-icon";
// import AddressIcon from "../icons/address-icon";
// import ArrowRightIcon from "../icons/arrow-right-icon";
// import classes from "./event-item.module.css";

function EventItem(props) {  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <div>
      <li>
        <img src={"/" + image} alt={title} />
        <div>
          <div>
            <h2>{title}</h2>
            <div>
              {/* <DateIcon /> */}
              <time>{humanReadableDate}</time>
            </div>
            <div>
              {/* <AddressIcon /> */}
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div>
            {/* <Button link={exploreLink}> */}
              <span>Explore Event</span>
              <span>
                {/* <ArrowRightIcon /> */}
              </span>
            {/* </Button> */}
          </div>
        </div>
      </li>
    </div>
  );
}

export default EventItem;
