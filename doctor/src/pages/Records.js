import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Records = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem('role') || '');
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userRole) {
      navigate('/login');
    } else {
      // Fetch records based on user role
      // const endpoint = userRole === 'doctor' ? 'http://localhost:3001/doctorPatients' : 'http://localhost:3001/patientDoctors';
      // axios.get(endpoint)
      //   .then(response => {
      //     setRecords(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching records:', error);
      //   });
    }
  }, [userRole, navigate]);

  const handleRecordSelect = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{userRole === 'doctor' ? 'Doctor Records' : 'Patient Records'}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">{userRole === 'doctor' ? 'Patients' : 'Doctors'}</h2>
            <div className="space-y-4">
              {records.map(record => (
                <div
                  key={record.id}
                  onClick={() => handleRecordSelect(record)}
                  className={`border rounded-lg p-4 cursor-pointer ${selectedRecord?.id === record.id ? 'bg-blue-100' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-bold">{record.name}</h3>
                  <p className="text-gray-700">{userRole === 'doctor' ? record.email : record.specialization}</p>
                </div>
              ))}
            </div>
          </div>
          {selectedRecord && (
            <div>
              <h2 className="text-2xl font-bold mb-4">{userRole === 'doctor' ? 'Patient Details' : 'Doctor Details'}</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">{selectedRecord.name}</h3>
                <p className="text-gray-700">{userRole === 'doctor' ? selectedRecord.email : selectedRecord.specialization}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Prescriptions</h4>
                <div className="space-y-2">
                  {selectedRecord.prescriptions.map(prescription => (
                    <div key={prescription.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{prescription.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Reports</h4>
                <div className="space-y-2">
                  {selectedRecord.reports.map(report => (
                    <div key={report.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{report.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold">Uploads</h4>
                <div className="space-y-2">
                  {selectedRecord.uploads.map(upload => (
                    <div key={upload.id} className="border rounded-lg p-2">
                      <p className="text-gray-700">{upload.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold">Payment Summary</h4>
                <div className="space-y-2">
                  {selectedRecord.payments.map(payment => (
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

export default Records;
