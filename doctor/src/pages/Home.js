import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/login');
    }else {
      navigate('/appointments')
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-purple-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Doctor Appointment System</h1>
            <p className="text-xl mb-8">Book appointments with ease and manage your health records online.</p>
            <button onClick={handleBookAppointment}
            className="bg-white text-purple-800 px-4 py-2 rounded-lg font-bold hover:bg-green-200">Book an Appointment</button>
          </div>
        </section>
        <section className="container mx-auto py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Book Appointments</h3>
              <p className="text-gray-700">Easily book appointments with your preferred doctors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Health Records</h3>
              <p className="text-gray-700">Access and manage your health records online.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Doctor Profiles</h3>
              <p className="text-gray-700">View detailed profiles of our doctors and their specializations.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
