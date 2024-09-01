import React from 'react';
import './UserDetail.scss';
import { useEventBookingContext } from '@/contexts/EventBookingContext';

const UserDetail: React.FC = () => {
  const { user } = useEventBookingContext();

  return(
  <div className="user-page">
    <div className="user-detail">
      <div className="user-name">{user.userName}</div>
      <div className="user-email">{user.userEmail}</div>
    </div>
  </div>
)};

export default UserDetail;