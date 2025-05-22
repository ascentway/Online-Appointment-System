// src/pages/PatientRecords.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const PatientRecords = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios.get('http://localhost:8080/api/patient/doctors')
      .then(response => {
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
        <h1 className="text-3xl font-bold mb-6">Patient Records</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Doctors</h2>
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
          {selectedDoctor && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Doctor Details</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                <p className="text-gray-700">{selectedDoctor.specialization}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Prescriptions</h4>
                <div className="space-y-2">
                  {selectedDoctor.prescriptions.map(prescription => (
                    <div key={prescription.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{prescription.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Reports</h4>
                <div className="space-y-2">
                  {selectedDoctor.reports.map(report => (
                    <div key={report.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{report.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Uploads</h4>
                <div className="space-y-2">
                  {selectedDoctor.uploads.map(upload => (
                    <div key={upload.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{upload.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold">Payment Summary</h4>
                <div className="space-y-2">
                  {selectedDoctor.payments.map(payment => (
                    <div key={payment.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{payment.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatientRecords;
