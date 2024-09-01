import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useEventBookingContext } from '@/contexts/EventBookingContext';
import { IEvent } from '@/types';
import './EventDetail.scss';
import Chip from '@/components/commons/Chip';
import BackButton from '@/components/commons/BackButton';

const EventDetail: React.FC = () => {
  const { events } = useEventBookingContext();
  const [event, setEvent] = useState<IEvent | null>(null);
  const { eventId } = useParams();

  // find the event by eventId
  useEffect(() => {
    const foundEvent = events.find((event: IEvent) => event.id === eventId);
    setEvent(foundEvent || null);
  }, [eventId, events]);

  // return when there is no event
  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <>
    <BackButton />
    <div className="event-page">
      <img className="event-image" src={event.image} alt={event.title} />
      <div className='event-details'>
        <h2 className="event-title">{event.title}</h2>
        <p className="event-description">{event.description}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Time: {event.schedule}</p>
        <div className="event-ticket-types">
          Ticket type: {event.ticketTypes.map((ticketType) => (
            <Chip key={ticketType} label={ticketType} />
          ))}
        </div>
        <Link to={`/booking/event/${event.id}`}> <button className="book-now-button">Book Now</button></Link>

      </div>
    </div>
    </>
  );
};

export default EventDetail;
