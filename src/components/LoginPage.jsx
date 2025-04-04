import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F19] to-[#151a2b]">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-white">Auth UI</h1>
        <div className="flex space-x-4">
          <Link to="/" className="px-4 py-2 text-white hover:text-gray-300">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Register
          </Link>
        </div>
      </header>

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-[#0B0F19] border border-gray-700 rounded-lg p-8">
            <h2 className="text-xl font-medium text-white text-center">Welcome Back</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;