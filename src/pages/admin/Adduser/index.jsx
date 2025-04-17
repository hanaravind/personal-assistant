import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { API_URL } from '../../../config';

const AddUser = () => {
    const navigate = useNavigate()
  // State to store form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    password: ''
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile_number: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation (basic)
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Mobile number validation (basic)
    if (!formData.mobile_number) {
      newErrors.mobile_number = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile_number)) {
      newErrors.mobile_number = 'Please enter a valid mobile number (10 digits)';
      isValid = false;
    }

    // Password validation (basic)
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (validateForm()) {
      // Submit form data
      console.log('Form Submitted', formData);
      await createUser()

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        mobile_number: '',
        password: ''
      });
    } else {
      console.log('Form has errors');
    }
  };

  const createUser = async () => {
    try {
      const payload = {...formData, whatsapp_number: formData.mobile_number}
      const res = await axios.post(`${API_URL}/user/users`, payload);
      if(res.data.status === "failed") {
        return
      }
      setTimeout(() => {
          navigate('/admin/dashboard')
      }, 500)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="max-w-md relative mx-auto mt-10 p-8 bg-white border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add User</h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
        </div>

        {/* Mobile number field */}
        <div className="mb-4">
          <label htmlFor="mobile_number" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            maxLength={12}
            minLength={10}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.mobile_number && <p className="text-red-500 text-xs mt-2">{errors.mobile_number}</p>}
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </form>
      <div onClick={() => navigate('/admin/dashboard')} className="bg-black absolute sm:cursor-pointer rounded-[50%] -top-[12px] -right-[14px] py-1 px-[10px] text-white">X</div>
    </div>
  );
};

export default AddUser;
