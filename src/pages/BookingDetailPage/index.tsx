import React, { useMemo } from 'react';
import './BookingDetail.scss';
import { IBooking } from '@/types';
import { Link, useParams } from 'react-router-dom';
import { useEventBookingContext } from '@/contexts/EventBookingContext';

const BookingDetail: React.FC = () => {

  const { bookings } = useEventBookingContext();
  const { bookingId } = useParams();

  const booking = useMemo(() => bookings.find((booking) => booking.id === bookingId), [bookingId, bookings]) as IBooking;

  if (!booking?.id) {
    return <div>No results</div>
  }

  return (
    <div className="booking-detail">
      <p> Hi <b>{booking.userName}</b>,</p>
      <p> Thank you for using our booking service !</p>
      <p> Here is your booking detail:</p>
      <p className="event-name">name: <b>{booking?.title}</b></p>
      <p className="event-date">time: {booking?.schedule} {booking?.date}</p>
      <p>location: <b>{booking?.location}</b></p>
      <p>ticket type: <b>{booking?.ticketType}</b></p>
      <div><img src={booking?.image || ''} alt={booking?.title} /></div>
      <p>Hope you have a great time with this event ! <Link to="/"> View more our events in here</Link></p>
    </div>
  )
};

export default BookingDetail;