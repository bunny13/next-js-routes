import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((events) => (
        <EventItem
          key={events.id}
          id={events.id}
          title={events.title}
          image={events.image}
          date={events.date}
          location={events.location}
        />
      ))}
    </ul>
  );
}

export default EventList;
