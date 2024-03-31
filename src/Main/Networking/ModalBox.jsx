import * as React from 'react';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import emailjs from '@emailjs/browser';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -60%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px',
  boxShadow: 24,
  p: 4,
};

export default function ModalBox() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_8qd8041', 'template_5zs756a', form.current, {
            publicKey: 'ct4fNvkJR3_BCv6QB',
        })      
        .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );

    handleClose(); // Close the modal after sending the email
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: 'orange', width: '400px', marginTop: '20px' }}>Mail An Offer Letter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=' z-50'
      >
        <Box sx={style}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label><br/>
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} className='w-full border border-gray-100'/><br/>
            <label>Email</label><br/>
            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} className='w-full border border-gray-100'/><br/>
            <label>Message</label><br/>
            <textarea name="message" value={formData.message} onChange={handleChange} className='w-full border border-gray-100'/><br/>
            <input type="submit" value="Send" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
