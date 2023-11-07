import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    Name: '',
    Address: '',
    Query: '',
    Number: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/Contact', formData)
      .then((res) => {
        console.log("Thank you for your Query..");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='d-flex w-100 vh-100 bg-black justify-content-center align-items-center'> {/* Add a background color style */}
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='Name'><strong>Name</strong></label>
            <input
              type='text'
              placeholder='Enter Your Name'
              name='Name'
              value={formData.Name}
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Address'><strong>Address</strong></label>
            <input
              type='text'
              placeholder='Enter Your City'
              name='Address'
              value={formData.Address}
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Query'><strong>Query</strong></label>
            <input
              type='text'
              placeholder='Enter Your Problem'
              name='Query'
              value={formData.Query}
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Number'><strong>Number</strong></label>
            <input
              type='text'
              placeholder='Enter Your Phone Number'
              name='Number'
              value={formData.Number}
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Contact
          </button>
          <p>We will contact you back soon</p>
          <a href='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Back to Home
          </a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
