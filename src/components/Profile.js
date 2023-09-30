import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="text-center">
        <FaUser className="text-4xl text-blue-500 mb-2" />
        <h1 className="text-xl font-semibold">Ayush</h1>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <FaEnvelope className="text-lg text-gray-600 mr-2" />
          <p>ayush@example.com</p>
        </div>
        <div className="flex items-center mt-2">
          <FaMapMarkerAlt className="text-lg text-gray-600 mr-2" />
          <p>Pune, India</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
