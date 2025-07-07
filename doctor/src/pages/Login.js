import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context';// Import the useAuth hook
import backgroundImg from '../Images/Background.png'; // Import the image

const Login = () => {
  const [role, setRole] = useState('patient');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login/', {
      email: formData.email,
      password: formData.password,
      role,
    })
      .then(response => {
        console.log('Login successful:', response.data);
        // localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', role);
        localStorage.setItem('isLoggedIn', true);
        if (response.data.user) {
          login(response.data.user); // Set user in context
        }
        navigate('/appointments'); // Redirect to appointment booking page after login
      })
      .catch(error => {
        console.error('Error logging in:', error);
        alert('Error logging in. Please try again.');
      });
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-purple-300 rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-purple-500 text-black px-4 py-2 rounded-lg font-semibold w-full hover:bg-green-300"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate('/signup')}
                className="text-red-500 hover:underline"
              >
                Need an account? Sign Up
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
