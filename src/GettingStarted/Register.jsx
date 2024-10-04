const Register = ({toggleRegister}) => {
    return (
      <div className="relative flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="absolute top-4 left-4">
          <button className="text-gray-400 hover:text-gray-600" onClick={toggleRegister}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
  
        <div className="absolute top-4 right-4">
          <button className="text-[#1CB0F6] shadow-[0_2px_0_#E5E5E5] font-bold font-din-round border-2 border-[#E5E5E5] rounded-xl p-3 hover:bg-gray-100 transition active:shadow-none active:translate-y-[5px] ">
            LOGIN
          </button>
        </div>
  
        <div className="w-full max-w-md bg-white p-10 rounded-lg">
          <h1 className="text-2xl font-bold text-center font-din-round text-[#3C3C3C] mb-6">
            Create your profile
          </h1>
  
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Age"
                className="w-full border-2 font-din-round-light bg-[#F7F7F7] text-[#777777] border-gray-300 p-3 rounded-xl focus:outline-none focus:border-[#1CB0F6]"
              />
              <p className="text-[14px] font-din-round-light text-gray-500 mt-2">
                Providing your age ensures you get the right Duolingo experience.
                For more details, please visit our{" "}
                <a href="#" className="text-[#1CB0F6] font-din-round">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
  
            <div>
              <input
                type="text"
                placeholder="Name (optional)"
                className="w-full border-2 font-din-round-light bg-[#F7F7F7] text-[#777777] border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#1CB0F6]"
              />
            </div>
  
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 font-din-round-light bg-[#F7F7F7] text-[#777777] border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#1CB0F6]"
              />
            </div>
  
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-2 font-din-round-light bg-[#F7F7F7] text-[#777777] border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#1CB0F6]"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-[#1CB0F6] font-din-round shadow-[0_5px_0_#1999D6] text-white active:shadow-none active:translate-y-[5px] py-3 rounded-xl font-bold hover:bg-sky-blue-400 transition"
            >
              CREATE ACCOUNT
            </button>
          </form>
  
          <div className="flex items-center justify-between mt-6 mb-6">
            <span className="border-b w-full"></span>
            <span className="text-xs font-din-round text-[#AFAFAF] px-2">OR</span>
            <span className="border-b w-full"></span>
          </div>
  
          <button className="w-full shadow-[0_3px_0_#E5E5E5] font-din-round border-2 border-[#E5E5E5]  text-[#3D5A99] py-3 rounded-xl font-bold hover:bg-gray-100 transition active:shadow-none active:translate-y-[5px]">
            <i className="fab fa-facebook mr-2"></i> FACEBOOK
          </button>
  
          <p className="text-center font-din-round-light text-[14px]  text-[#AFAFAF] mt-6">
            By signing in to Duolingo, you agree to our{" "}
            <a href="#" className="font-din-round font-bold">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="font-din-round font-bold">
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-center font-din-round-light text-[14px] text-[#AFAFAF] mt-1">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="font-din-round text-[#AFAFAF]">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="font-din-round text-[#AFAFAF] font-bold">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    );
  };
  
  export default Register;
  