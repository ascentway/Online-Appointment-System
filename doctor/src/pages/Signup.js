// src/pages/Signup.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    city: '',
    state: '',
    houseNumberOrName: '',
    streetName: '',
    specialization: '',
    hospital: '',
    yearsOfExperience: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupDataPatient = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      mobileNumber: formData.mobileNumber,

      city: formData.city,
      state: formData.state,
      houseNumberOrName: formData.houseNumberOrName,
      streetName: formData.streetName,

    };

    const signupDataDoctor = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      mobileNumber: formData.mobileNumber,
      specialization: formData.specialization,
      hospital: formData.hospital,
      yearsOfExperience: formData.yearsOfExperience,
    };
    // navigate('/records');
    if (role === 'doctor') {
      axios.post('http://localhost:8080/doctor/save', signupDataDoctor)
        .then(response => {
          // localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', role);
          navigate('/login');
        })
        .catch(error => {
          console.error('Error signing up:', error);
          alert('Error signing up. Please try again.');
        });
    }
    else if (role === 'patient') {
      axios.post('http://localhost:8080/patient/save', signupDataPatient)
        .then(response => {
          // localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', role);
          navigate('/login');
        })
        .catch(error => {
          console.error('Error signing up:', error);
          alert('Error signing up. Please try again.');
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          {!role && (
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                I am a
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                required
              >
                <option value="" disabled>Select Role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
          )}
          {role && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              {role === 'patient' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="houseNumberOrName" className="block text-sm font-medium text-gray-700 mb-2">
                      House Name or Number
                    </label>
                    <input
                      type="text"
                      id="houseNumberOrName"
                      name="houseNumberOrName"
                      value={formData.houseNumberOrName}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="streetName" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Name
                    </label>
                    <input
                      type="text"
                      id="streetName"
                      name="streetName"
                      value={formData.streetName}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                </>
              )}
              {role === 'doctor' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization
                    </label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-2">
                      Hospital
                    </label>
                    <input
                      type="text"
                      id="hospital"
                      name="hospital"
                      value={formData.hospital}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      required
                    />
                  </div>
                </>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold w-full hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          )}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-blue-500 hover:underline"
            >
              Already have an account? Login
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
