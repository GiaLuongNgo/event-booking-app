import React from 'react';
import './MyBookings.scss';
import { useEventBookingContext } from '@/contexts/EventBookingContext';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/commons/BackButton';
import ConfirmModal from '@/components/commons/ConfirmModal';
import useModal from '@/hooks/useModal';

const MyBookingDetail: React.FC = () => {

  const { bookings, cancelBooking } = useEventBookingContext();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const [bookingId, setBookingId] = React.useState('');

  const onView = (bookingId: string) => {
    navigate(`/my-bookings/${bookingId}`);
   }

  const onCancel = () => {
    cancelBooking(bookingId);
    closeModal();
  }

  const handleOpenCancelModal = (bookingId: string) => {
    setBookingId(bookingId);
    openModal();
  }

  if (!bookings.length) {
    return <div className="page">You have no bookings yet</div>
  }

  return (
    <div className="page">
    <ConfirmModal text='Do you sure to cancel this Event ?' isOpen={isOpen} onClose={closeModal} onConfirm={onCancel} />
    <BackButton />
      {bookings.map((item) => (
        <div key={item.id} className="booking">
          <div className="event-name">{item.title}</div>
          <div>
            <div className="event-type">{item.ticketType}</div>
            <div className="event-date">{item.date}</div>
          </div>
          <div className="buttons">
            <button className="view-button" onClick={() => onView(item.id)}>View</button>
            <button className="cancel-button" onClick={() => handleOpenCancelModal(item.id)}>Cancel</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default MyBookingDetail;