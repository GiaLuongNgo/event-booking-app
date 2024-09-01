import React, { useEffect, useState } from 'react';
import { IBooking, IEvent } from '@/types';
import './BookingPage.scss';
import { useEventBookingContext } from '@/contexts/EventBookingContext';
import { useParams, useNavigate } from 'react-router-dom';
import Select from '@/components/commons/Select';
import Input from '@/components/commons/Input';
import { useCommonContext } from '@/contexts/CommonContext';
import BackButton from '@/components/commons/BackButton';
import ConfirmModal from '@/components/commons/ConfirmModal';
import useModal from '@/hooks/useModal';
import {
  useFormik,
} from 'formik';
import { object, string } from 'yup';


const BookingPage: React.FC = () => {
  const { events, user, addBooking, bookings } = useEventBookingContext();
  const [event, setEvent] = useState<IEvent | null>(null);
  const params = useParams();
  const navigate = useNavigate();
  const eventId = params.eventId || '';
  const { showAlert } = useCommonContext();
  const { isOpen, openModal, closeModal } = useModal();

  const formInitialValues: IBooking = {
    id: '',
    eventId: '',
    ticketType: '',
    userName: user.userName,
    userEmail: user.userEmail,
    title: '',
    date: '',
    location: '',
    image: '',
    description: '',
    schedule: '',
  };

  const formValidationSchema = object({
    ticketType: string().required('Ticket type is required !'),
    userName: string().required('User name is required !'),
    userEmail: string().email('Invalid email !').required('User email is required !'),
  });

  const {
    handleSubmit,
    errors,
    handleChange,
    values,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log('Booking confirmed for', values);
      openModal();
    }
  })

  useEffect(() => {
    const foundEvent = events.find((event: IEvent) => event.id === eventId);
    setEvent(foundEvent || null);
    const { title, date, location, image, description, schedule } = foundEvent as IEvent;

    setValues({
      ...values,
      ticketType: foundEvent?.ticketTypes[0] || '',
      eventId, title, date, location, image, description, schedule,
      id: `${eventId}-${foundEvent?.ticketTypes[0]}`.replace(' ', '-'),

    });
  }, [eventId, events, setFieldValue]);

  const handleConfirmBooking = () => {

    if (bookings.some(preBooking => preBooking.id === values.id && preBooking.ticketType === values.ticketType)) {
      showAlert('error',`You have already booked this event with ${values.ticketType} type !`);
      closeModal();
      return;
    }
    addBooking(values)
    closeModal()
    showAlert('success', `Booking confirmed for ${event?.title} - ${values.ticketType}`);
    navigate('/my-bookings');
  }

  return (
    <>
      <BackButton />
      <ConfirmModal text='Do you sure to book this Event ?' isOpen={isOpen} onClose={closeModal} onConfirm={handleConfirmBooking} />
      <form onSubmit={handleSubmit}>

        <div className="booking-screen">
          <h2 className='title'>{event?.title || ''}</h2>
          <span className='label'>Select ticket type:</span>
          <Select
            name="ticketType"
            id="ticketType"
            options={event?.ticketTypes || []}
            className="ticket-type-select"
            value={values.ticketType}
            onChange={handleChange}
          >
          </Select>
          <div className="attendee-info-input">
            <span className='label'>User Name:</span>
            <Input
              name="userName"
              id="ticketType"
              value={values.userName}
              onChange={handleChange}
              placeholder="Enter user name"
            />
            {errors.userName ? <span className='error-text'>{errors.userName}</span> : null}
          </div>
          <div className="attendee-info-input">
            <span className='label'>User Email:</span>
            <Input
              name='userEmail'
              value={values.userEmail}
              onChange={handleChange}
              placeholder="Enter user email"
            />
            {errors.userEmail ? <span className='error-text'>{errors.userEmail}</span> : null}
          </div>
          <button className="confirm-booking-button" type='submit'>
            Book it !
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingPage;