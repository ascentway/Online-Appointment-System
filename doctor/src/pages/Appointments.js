// src/pages/Appointments.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Appointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios.get('/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleBookAppointment = () => {
    if (!selectedDoctor || !selectedSlot || !appointmentDate) {
      alert('Please select a doctor, time slot, and date.');
      return;
    }

    // Send the appointment details to the backend
    axios.post('/api/appointments', {
      doctorId: selectedDoctor.id,
      date: appointmentDate,
      time: selectedSlot,
    })
      .then(response => {
        alert('Appointment booked successfully!');
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
        alert('Error booking appointment. Please try again.');
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
        <div className="mb-6">
          <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={handleDateChange}
            className="border border-purple-800 rounded-lg px-4 py-2 w-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>
            <div className="space-y-4">
              {doctors.map(doctor => (
                <div
                  key={doctor.id}
                  onClick={() => handleDoctorSelect(doctor)}
                  className={`border rounded-lg p-4 cursor-pointer ${selectedDoctor?.id === doctor.id ? 'bg-blue-100' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-gray-700">{doctor.specialization}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {selectedDoctor && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>
                <div className="grid grid-cols-2 gap-4">
                  {selectedDoctor.availableSlots.map(slot => (
                    <div
                      key={slot}
                      onClick={() => handleSlotSelect(slot)}
                      className={`border rounded-lg p-4 cursor-pointer text-center ${selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleBookAppointment}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointments;
