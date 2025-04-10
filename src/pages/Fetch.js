import React, { useEffect, useState } from 'react';
import '../style/fetch.css'

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch customers from the backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(BACKEND_URL+ "/customer"); // Updated to match your backend route
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
        <div className="customers-container">
          <h1 className="customers-title">Customers List</h1>
          {customers.length > 0 ? (
            <div className="customers-list">
              {customers.map((customer) => (
                <div className="customer-card" key={customer._id}>
                  <div className="customer-details">
                    <p>Full Name: {customer.fullname}</p>
                    <p>Address: {customer.address}</p>
                    <p>Email: {customer.email}</p>
                    <p>Phone Number: {customer.phonenumber}</p>
                    <p>Plan: {customer.plan}</p>
                    <p>Cost: ${customer.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-customers">No customers found.</p>
          )}
        </div>  );
};

export default Customers;