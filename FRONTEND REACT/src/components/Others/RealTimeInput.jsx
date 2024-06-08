import React, { useState } from 'react';

function RealTimeInput() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Real-time Input</h1>
      <input
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <div className="text-lg">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default RealTimeInput;
