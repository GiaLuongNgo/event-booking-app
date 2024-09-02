import React, { useState, createContext, useContext } from 'react';
import { IEvent, IBooking, IUser } from '../types';
import { mockEvents, mockUser } from '../mock';

interface EventBookingContextType {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  bookings: IBooking[];
  addBooking: (booking: IBooking) => void;
  cancelBooking: (bookingId: string) => void;
  user: IUser;
}

// the global context for the app to manage events and bookings
export const EventBookingContext = createContext<EventBookingContextType | undefined>(undefined);

export const EventBookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<IEvent[]>(mockEvents);
  const [user] = useState<IUser>(mockUser);
  const [bookings, setBookings] = useState<IBooking[]>([]); // State for bookings

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

// custom hook to use the event booking context
export function useEventBookingContext() {
  const context = useContext(EventBookingContext);
  if (!context) {
    throw new Error('useEventBookingContext must be used within an EventBookingProvider');
  }
  return context;
}

