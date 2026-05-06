
import education from '../../assets/education.svg'
const Education = () => {
  return (
    <div className="flex flex-row mx-auto w-[65%] mt-20">
      <img src={education} alt="education" className="w-[40%] mx-auto" />
      <div className="flex flex-col w-[50%] justify-center">
        <h2 className="text-lg font-medium">Free and open market education </h2>
        <p className="mt-2">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <p className="mt-3">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
      </div>
    </div>
  );
}

export default Education
