// src/pages/DoctorRecords.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const DoctorRecords = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Fetch the list of patients from the backend
    axios.get('http://localhost:8080/api/doctor/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Doctor Records</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Patients</h2>
            <div className="space-y-4">
              {patients.map(patient => (
                <div
                  key={patient.id}
                  onClick={() => handlePatientSelect(patient)}
                  className={`border rounded-lg p-4 cursor-pointer ${selectedPatient?.id === patient.id ? 'bg-blue-100' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-bold">{patient.name}</h3>
                  <p className="text-gray-700">{patient.email}</p>
                </div>
              ))}
            </div>
          </div>
          {selectedPatient && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">{selectedPatient.name}</h3>
                <p className="text-gray-700">{selectedPatient.email}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Prescriptions</h4>
                <div className="space-y-2">
                  {selectedPatient.prescriptions.map(prescription => (
                    <div key={prescription.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{prescription.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Reports</h4>
                <div className="space-y-2">
                  {selectedPatient.reports.map(report => (
                    <div key={report.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{report.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Uploads</h4>
                <div className="space-y-2">
                  {selectedPatient.uploads.map(upload => (
                    <div key={upload.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{upload.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold">Payment Summary</h4>
                <div className="space-y-2">
                  {selectedPatient.payments.map(payment => (
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

export default DoctorRecords;
