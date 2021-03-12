import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { NotificationEl } from './Notification.css';

const notificationRoot = document.querySelector('#notification-root');

const Notification = ({ text }) => {
  return createPortal(
    <NotificationEl>{text}</NotificationEl>,
    notificationRoot
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired
}

export default Notification;