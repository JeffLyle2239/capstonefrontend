import React, { useState } from 'react';
import axios from 'axios';
import '../style/customerroute.css'
const NewCustomer = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    address: '',
    email: '',
    phonenumber: '',
    plan: '',
    cost: 0,
  });
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Generic handler for input and textarea fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  // Handler for radio button changes
  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    // Set the cost based on the selected plan
    let planCost = 0;
    if (selectedPlan === 'the Untamed Tale') {
      planCost = 5000;
    } else if (selectedPlan === 'the Wild Narrative') {
      planCost = 7500;
    } else if (selectedPlan === 'the Odyssey') {
      planCost = 10000;
    }
    setFormData((prevState) => ({
      ...prevState,
      plan: selectedPlan,
      cost: planCost,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous messages
    setFormError('');
    setSuccessMessage('');
    try {
      // Post data to the backend endpoint
      const response = await axios.post('http://localhost:8080/customer', formData);
      setSuccessMessage('Customer saved successfully!');
      console.log('Server response:', response.data);
      // Optionally, reset form fields after success:
      // setFormData({ fullname: '', address: '', email: '', phonenumber: '', plan: '', cost: 0 });
    } catch (error) {
      console.error('Error saving customer information:', error);
      setFormError('Error saving customer.');
    }
  };
  const { fullname, address, email, phonenumber, plan, cost } = formData;
  return (
    <div className='container'>
    <div className="NewCustomer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="text"
          id="phonenumber"
          value={phonenumber}
          onChange={handleChange}
          required
        />
        <fieldset>
          <h3>Select a Plan:</h3>
          <label>
            <input
              type="radio"
              value="the Untamed Tale"
              checked={plan === 'the Untamed Tale'}
              onChange={handlePlanChange}
              required
            />
            The Untamed Tale ($5,000)
          </label>
          <label>
            <input
              type="radio"
              value="the Wild Narrative"
              checked={plan === 'the Wild Narrative'}
              onChange={handlePlanChange}
            />
            The Wild Narrative ($7,500)
          </label>
          <label>
            <input
              type="radio"
              value="the Odyssey"
              checked={plan === 'the Odyssey'}
              onChange={handlePlanChange}
            />
            The Odyssey ($10,000)
          </label>
        </fieldset>
        <br /><p>Selected Plan Cost: ${cost}</p>
        <button type="submit">Ready to Dream</button>
        {formError && <p className="error">{formError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
    </div>
  );
};
export default NewCustomer;