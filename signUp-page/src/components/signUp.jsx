import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', country: '', phoneNumber: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Welcome Section */}
      <div className="lg:w-1/2 w-full bg-black text-white flex flex-col justify-center items-start px-6 py-10 lg:py-0">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Welcome.!</h1>
      </div>

      {/* Right Side - Sign-Up Form Section */}
      <div className="lg:w-1/2 w-full bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col justify-center items-center px-6 py-10">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md lg:max-w-sm mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">Sign Up</h2>
          <p className="text-center text-gray-400 mb-4 lg:mb-6">Create your account!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-purple-500 text-black"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-purple-500 text-black"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-purple-500 text-black"
                placeholder="Your Country"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-purple-500 text-black"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-purple-500 text-black"
                placeholder="Your Password"
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute inset-y-0 right-3 top-9 text-sm text-gray-500"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center my-4 text-gray-400">Or</div>

          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-red-500 rounded-full p-2">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6"/>
            </button>
            <button className="bg-blue-500 rounded-full p-2">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="w-6 h-6"/>
            </button>
            <button className="bg-gray-600 rounded-full p-2">
              <img src="https://img.icons8.com/ios-glyphs/48/ffffff/github.png" alt="GitHub" className="w-6 h-6"/>
            </button>
          </div>

          <div className="text-center text-gray-400">
            <p>
              Already have an account? <a href="#" className="text-purple-400 hover:text-purple-600">Login</a>
            </p>
          </div>

          <div className="text-center text-gray-400 mt-4 text-xs">
            <a href="#" className="hover:text-purple-600 mx-2">Terms & Conditions</a> | 
            <a href="#" className="hover:text-purple-600 mx-2">Support</a> | 
            <a href="#" className="hover:text-purple-600 mx-2">Customer Care</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
