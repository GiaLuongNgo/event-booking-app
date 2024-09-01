import React from 'react';
import { IEvent, IBooking, IUser } from '../types';
import { mockEvents, mockUser } from '../mock';

interface EventBookingContextType {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  bookings: IBooking[];
  addBooking: (booking: IBooking) => void;
  cancelBooking: (bookingId: string) => void;
  user: IUser;
};

export const EventBookingContext = React.createContext<EventBookingContextType | undefined>(undefined);

export const EventBookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = React.useState<IEvent[]>(mockEvents);
  const [user] = React.useState<IUser>(mockUser);
  const [bookings, setBookings] = React.useState<IBooking[]>([]); // State for bookings

  // Function to add a booking
  const addBooking = (booking: IBooking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  // Function to cancel a booking
  const cancelBooking = (bookingId: string) => {
    setBookings((prevBookings) => prevBookings.filter(booking => booking.id !== bookingId));
  };

  const value = {
    events,
    setEvents,
    bookings,
    addBooking,
    cancelBooking,
    user
  };

  return (
    <EventBookingContext.Provider value={value}>
      {children}
    </EventBookingContext.Provider>
  );
};

export function useEventBookingContext() {
  const context = React.useContext(EventBookingContext);
  if (!context) {
    throw new Error('useEventBookingContext must be used within an EventBookingProvider');
  }
  return context;
}

