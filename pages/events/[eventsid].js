import React from "react";
import { useRouter, UseRouter } from "next/router";
import { getEventById, getAllEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { Fragment } from "react";
function EventDetailpage(props) {
  // const router = useRouter();

  // const eventId = router.query.eventsid;
  // console.log(eventId);
  // const event = getEventById(eventId);

  if (!props.chosenEvent) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={props.chosenEvent.title} />
      <EventLogistics
        date={props.chosenEvent.date}
        address={props.chosenEvent.location}
        image={props.chosenEvent.image}
        imageAlt={props.chosenEvent.title}
      />
      <EventContent>
        <p>{props.chosenEvent.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventsId = context.params.eventsid;
  const event = await getEventById(eventsId);
  return {
    props: {
      chosenEvent: event,
    },
  };
}

// because this is a dynamic page we don't know all the ids to pre render so we use getStatucPath()

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventsid: event.id } }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailpage;
