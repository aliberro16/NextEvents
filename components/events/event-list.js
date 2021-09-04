import React from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';
function EventList(props) {
  const { items } = props;
  return (
    <div>
      <ul className={classes.list}>
        {items.map((item) => (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
