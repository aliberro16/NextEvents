import React from "react";
import EventItem from "./event-item";
function EventList(props) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>
            {
              <EventItem
                key={item.id}
                id={item.id}
                title={item.title}
                location={item.location}
                date={item.date}
                image={item.image}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
