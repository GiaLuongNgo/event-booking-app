import { IEvent } from '../types/index';

// Ticket types for events
export const ticketTypes = ['General Admission', 'VIP', 'Early Bird', 'Student', 'Senior'];

// Mock data for events using Array.from method to create an array of 10 events
export const mockEvents: IEvent[] = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Event ${i + 1}`,
  date: `2024-10-${String(i + 1).padStart(2, '0')}`,
  location: `Location ${i + 1}`,
  image: `https://picsum.photos/id/${10 + i}/380/285`,
  description: `This is event ${i + 1}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
  schedule: `${10 + i}:00 AM - ${5 + i}:00 PM`,
  ticketTypes: ticketTypes.slice(0, Math.floor(i / 2) + 1),
}));


// Mock data for bookings using Array.from method to create an array of 5 bookings
export const mockBookings = Array.from({ length: 5 }, (_, i) => ({
  id: (i + 1).toString(),
  eventId: (i + 1).toString(),
  ticketType: ticketTypes[Math.floor(Math.random() * ticketTypes.length)],
  userName: 'Louis Ngo',
  userEmail: 'luong.ngogia1997@gmail.com'
}))

// Mock data for user
export const mockUser = {
  userName: 'Louis Ngo',
  userEmail: 'luong.ngogia1997@gmail.com'
}
