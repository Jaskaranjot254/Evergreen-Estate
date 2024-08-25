

import React, { useState } from 'react';
import '../sign-in/SignIn.css'; 

const SignIn = () => {
  // State variables for form fields and errors
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (validateForm()) {
      // Handle form submission logic (e.g., API call)
      console.log('Form submitted:', formData);
      // Clear form fields after submission if needed
      setFormData({ email: '', password: '' });
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    // Update state with errors (if any)
    setErrors(newErrors);

    return valid;
  };

  return (
    <>
    <div className="sign-in-form-container">
      <h1 className='sign-title'>Sign In</h1>
      <form className='sign-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email && 'is-invalid'}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password && 'is-invalid'}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      </div>
    </>
  );
};

export default SignIn;
