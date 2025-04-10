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
        const response = await fetch('http://localhost:8080/customer'); // Updated to match your backend route
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
                    <p><strong>Full Name:</strong> {customer.fullname}</p>
                    <p><strong>Address:</strong> {customer.address}</p>
                    <p><strong>Email:</strong> {customer.email}</p>
                    <p><strong>Phone Number:</strong> {customer.phonenumber}</p>
                    <p><strong>Plan:</strong> {customer.plan}</p>
                    <p><strong>Cost:</strong> ${customer.cost}</p>
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