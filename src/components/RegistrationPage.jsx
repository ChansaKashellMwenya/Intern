import React from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F19] to-[#151a2b]">
      <header className="p-6"></header>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-[#0B0F19] border border-gray-700 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-xl font-medium text-white">Create an Account</h2>
              <p className="mt-2 text-sm text-gray-400">
                Enter your details to create your account
              </p>
            </div>
            
            <form className="mt-8 space-y-6">
              <div className="rounded-md space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-[#141a29] border border-gray-700 rounded-md text-white placeholder-gray-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 block w-full px-3 py-2 bg-[#141a29] border border-gray-700 rounded-md text-white placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-[#141a29] border border-gray-700 rounded-md text-white placeholder-gray-500"
                    placeholder="Create a password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-[#141a29] border border-gray-700 rounded-md text-white placeholder-gray-500"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;