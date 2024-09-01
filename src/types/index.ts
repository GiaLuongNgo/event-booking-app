import { ReactNode } from "react";

export interface IContainer {
    children: ReactNode;
    className?: string;
}

export interface IEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  schedule: string;
  ticketTypes: string[];
};

export interface IBooking {
  id: string;
  eventId: string;
  ticketType: string;
  userName: string;
  userEmail: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  schedule: string;
};

export interface IUser {
  userName: string;
  userEmail: string;
};

