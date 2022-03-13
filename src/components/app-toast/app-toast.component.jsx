import React, { useState, useEffect} from "react";

import { Toast } from "react-bootstrap";

import './app-toast.styles.scss';

export const TOAST_MESSAGE_TYPES = {
  SUCCESS : 'SUCCESS',
  ERROR : 'ERROR'
}

const AppToast = ({ showToast, toastContent }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { title, text, type } = toastContent;

  useEffect(() => {
    setOpen(showToast);
  },[showToast]);

  return (
    <Toast 
      show={open}
      onClose={handleClose}
      className="app-toast"
      bg={ type === TOAST_MESSAGE_TYPES.ERROR ? 'warning' : 'light'}>
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>
        {text}
      </Toast.Body>
    </Toast>
  )
}

export default AppToast;