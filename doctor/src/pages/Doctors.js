// src/pages/Doctors.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios.get('http://localhost:8080/doctor/allDoctors')
      .then(response => {
        console.log(response.data);
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map(doctor => (
            <div
              key={doctor.did}
              onClick={() => handleDoctorSelect(doctor)}
              className={`border rounded-lg p-4 cursor-pointer ${selectedDoctor?.id === doctor.did ? 'bg-blue-100' : 'bg-white'}`}
            >
              <h3 className="text-xl font-bold">{doctor.firstName} {doctor.lastName}</h3>
              <p className="text-gray-700">{doctor.specialization}</p>
            </div>
          ))}
        </div>
        {selectedDoctor && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Doctor Details</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">{selectedDoctor.firstName} {selectedDoctor.lastName}</h3>
              <p className="text-gray-700">{selectedDoctor.specialization}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold">Experience</h4>
              <p className="text-gray-700">{selectedDoctor.yearsOfExperience} years</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold">Contact</h4>
              <p className="text-gray-700">{selectedDoctor.mobileNumber}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold">Clinic/Hospital</h4>
              <p className="text-gray-700">{selectedDoctor.hospital}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Available Slots</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {selectedDoctor.slots.map(slot => (
                  <div key={slot.sid} className="border rounded-lg p-2 text-center">
                    {slot.startTime}<span> - </span>{slot.endTime}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
