import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../data/dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const events = getEventById(router.query.id);

  if (!events) {
    return "!No Events Found";
  }

  return (
    <>
      <EventSummary title={events.title} />
      <EventLogistics
        date={events.date}
        address={events.location}
        image={events.image}
        imageAlt={events.title}
      />
      <EventContent>
        <p>{events.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
