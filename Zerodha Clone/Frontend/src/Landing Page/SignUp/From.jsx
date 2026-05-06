
import signUp from '../../assets/SignUp.png'

const From = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-10 mb-20">
      <img className="ml-10" src={signUp} />
      <div className=" flex flex-col items-start justify-center ml-20">
        <h1 className='text-2xl font-medium'>Signup Now</h1>
        <p className='text-xl font-medium mt-5 mb-5 text-gray-600'>or track your existing application </p>
        <from className="flex flex-col items-start">
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="border-1 border-gray-500 px-4 py-4 w-90 "
          />
          <button
            type="submit"
            className="text-lg font-medium mt-5 bg-blue-500 text-white px-10 py-2 rounded mb-20 cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Get OTP
          </button>
        </from>
      </div>
    </div>
  );
}

export default From
