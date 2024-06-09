import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div>No user data available</div>;
  }

  return (
    <div className="details">
      <h3>Thanks for signing up, find your details below:</h3>
      <div>First Name: {state.firstName}</div>
      <div>Last Name: {state.lastName}</div>
      <div>Username: {state.username}</div>
      <div>Email Address: {state.emailAddress}</div>
      <div>Phone Number: {state.phoneNumber}</div>
      <div>Country: {state.country}</div>
      <div>City: {state.city}</div>
      <div>PAN Number: {state.panNumber}</div>
      <div>Aadhar Number: {state.AadharNumber}</div>
    </div>
  );
};

export default UserDetails;
