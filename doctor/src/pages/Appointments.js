// src/pages/Appointments.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';



const Appointments = () => {
  const [doctors, setDoctors] = useState([
  //   {
  //     id: 1,
  // name: "Dr. John Doe",
  // specialization: "Cardiology",
  // availableSlots: [ "12:00","1:00"]
  // },{
  //   id:2,
  //    name: 'Neon',
  //   specialization: 'orthopedist',
  // },{
  //   id:3,
  //    name: 'Smith',
  //   specialization: 'Ontocologist',
  // }
]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios.get('http://localhost:8080/doctor/allDoctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const handleDoctorSelect = (doctor) => {
    console.log(doctor);
    setSelectedDoctor(doctor);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot) => {
     console.log(slot);
    setSelectedSlot(slot);
  };

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleBookAppointment = () => {
    console.log(selectedDoctor);
    console.log(selectedSlot);
    console.log(appointmentDate);
    if (!selectedDoctor || !selectedSlot || !appointmentDate) {
      alert('Please select a doctor, time slot, and date.');
      return;
    }

    // // Send the appointment details to the backend
    // axios.post('/api/appointments', {
    //   doctorId: selectedDoctor.id,
    //   date: appointmentDate,
    //   time: selectedSlot,
    // })
    //   .then(response => {
    //     alert('Appointment booked successfully!');
    //   })
    //   .catch(error => {
    //     console.error('Error booking appointment:', error);
    //     alert('Error booking appointment. Please try again.');
    //   });
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
                  key={doctor.did}
                  onClick={() => handleDoctorSelect(doctor)}
                  className={`border rounded-lg p-4 cursor-pointer ${selectedDoctor?.id === doctor.did ? 'bg-blue-100' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-bold">{doctor.firstName} {doctor.lastName}</h3>
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
                  {selectedDoctor.slots.map(slot => (
                    <div
                      key={slot.sid}
                      onClick={() => handleSlotSelect(slot)}
                      className={`border rounded-lg p-4 cursor-pointer text-center ${selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    >
                      {slot.startTime}<span> - </span> {slot.endTime}
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
