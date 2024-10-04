import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="relative w-full max-w-md bg-white p-10 rounded-lg">
        {/* Close button */}
        <div className="absolute top-4 left-4">
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Login button */}
        <div className="absolute top-4 right-4">
          <button className="text-blue-500 font-bold hover:text-blue-600">
            LOGIN
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">Create your profile</h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Age input */}
          <div>
            <input
              type="text"
              placeholder="Age"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-2">
              Providing your age ensures you get the right Duolingo experience. For more details, please visit our{" "}
              <a href="#" className="text-blue-500">Privacy Policy</a>.
            </p>
          </div>

          {/* Name input */}
          <div>
            <input
              type="text"
              placeholder="Name (optional)"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button type="button" className="absolute right-3 top-3 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l5-5m0 0l-5-5m5 5H3" />
              </svg>
            </button>
          </div>

          {/* Create account button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-400 transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        {/* Or divider */}
        <div className="flex items-center justify-between mt-6 mb-6">
          <span className="border-b w-full"></span>
          <span className="text-xs text-gray-500 px-2">OR</span>
          <span className="border-b w-full"></span>
        </div>

        {/* Social login buttons */}
        <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition">
          <i className="fab fa-facebook mr-2"></i> FACEBOOK
        </button>

        {/* Privacy and Terms */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By signing in to Duolingo, you agree to our{" "}
          <a href="#" className="text-blue-500">Terms</a> and{" "}
          <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>
        <p className="text-center text-xs text-gray-500 mt-1">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-blue-500">Privacy Policy</a> and{" "}
          <a href="#" className="text-blue-500">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default Register;
