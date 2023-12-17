import React, { useState } from 'react';
import { ValidationError, useForm } from '@formspree/react';
import './Contact.css'; // You can create a CSS file for styling

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [state, handleSubmit] = useForm("myyrgkpr");

  return (
    <div id='contact'>
      <h3 className='sectionTitle-5'>Contact me!</h3>
      <div className='wrap-text'>
        Let's have a chat! Whether you have a question or you want to work together. My inbox is also open to job opportunities, part-time or freelancing opportunities – my inbox welcomes your emails.
      </div>
      <button className='btnHi' onClick={openModal}>Say Hi</button>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Form</h2>

            {state.succeeded ? (
              <div className="success-message">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                action="https://formspree.io/f/myyrgkpr"
                method="post"
              >
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>

                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>

                <label>
                  Message:
                  <textarea name="message" required></textarea>
                </label>

                <button type="submit" className='send' disabled={state.submitting}>Send</button>
              </form>
            )}

            <button className='close' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
