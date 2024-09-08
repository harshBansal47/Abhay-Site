"use client";
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

export default function MapView() {
  const [state, Submit] = useForm("xeojddaa");
  // State to hold form field values
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xeojddaa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setError(null);
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Something went wrong. Please try again later.');
      });
  };

  // State to hold form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  // Handle form submission


  return (
    <div id='contact' className="relative w-11/12 mx-auto my-10 p-7 bg-slate-100 rounded-lg shadow-sm flex flex-col items-center">
      {/* Header Section */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/70 py-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-600 mb-4">
          Reach out to Us
        </h1>
        <div className="w-80 h-1 bg-neutral-700 rounded-full mx-auto mb-4"></div>
      </div>

      {/* Contact Form Section */}
      <div className="relative mt-24 max-w-lg w-full p-6 border border-gray-300 rounded-lg bg-white shadow-lg z-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {submitted && <p className="mt-4 text-center text-green-600">Thank you for your message!</p>}
      </div>

      {/* Map Section */}
      <div className="w-full mt-10 relative rounded-lg border overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.507651239033!2d76.84520701333997!3d24.675069959363697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397aebe8c9057bd1%3A0x4fad696717ce01ae!2sShanti%20Accounting%20and%20Taxation!5e0!3m2!1sen!2sin!4v1725734437966!5m2!1sen!2sin"
          title="Google Maps Location"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
