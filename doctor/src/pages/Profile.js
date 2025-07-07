import React from 'react';
import { useAuth } from './Context';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="p-8">No user data found.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="mb-2"><strong>Name:</strong> {user.name || 'N/A'}</div>
      <div className="mb-2"><strong>Email:</strong> {user.email || 'N/A'}</div>
      <div className="mb-2"><strong>Role:</strong> {user.role || 'N/A'}</div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Profile;
