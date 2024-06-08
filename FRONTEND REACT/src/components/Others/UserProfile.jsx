import React, { useState } from 'react';

function UserProfile() {
  const initialUserData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    // Save the updated user data (e.g., send it to a server)
    console.log('User data saved:', userData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
      <div className="border rounded-md p-4">
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md p-2"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md p-2"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md p-2"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block mb-2">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md p-2"
            readOnly={!isEditing}
          />
        </div>
        <div className="flex justify-end">
          {isEditing ? (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
