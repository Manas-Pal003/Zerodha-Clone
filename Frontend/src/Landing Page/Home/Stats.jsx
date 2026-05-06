import ecosystem from '../../assets/ecosystem.png'
import { Link } from 'react-router-dom'
const Stats = () => {
  return (
    <div className="flex mx-auto justify-center h-auto w-[65%] mt-20">
      <div className="flex flex-col w-[50%]">
        <h2 className="text-2xl font-medium">Trust with confidence</h2>
        <h3 className="mt-10 text-lg font-medium">Customer-first always</h3>
        <p className="mt-2">
          That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of
          equity investments, making us India’s largest broker; contributing to
          15% of daily retail exchange volumes in India.
        </p>
        <h3 className="mt-10 text-lg font-medium">No spam or gimmicks</h3>
        <p className="mt-2">
          No gimmicks, spam, "gamification", or annoying push notifications.
          High quality apps that you use at your pace, the way you like. Our
          philosophies.
        </p>
        <h3 className="mt-10 text-lg font-medium">The Zerodha universe</h3>
        <p className="mt-2">
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech
          startups offer you tailored services specific to your needs.
        </p>
        <h3 className="mt-10 text-lg font-medium">Do better with money</h3>
        <p className="mt-2">
          With initiatives like Nudge and Kill Switch, we don't just facilitate
          transactions, but actively help you do better with your money.
        </p>
      </div>
      <div className="flex flex-col">
        <img src={ecosystem} className="w-[80%] mx-auto mt-10" />
        <Link to="/products" className='text-blue-500 text-md font-medium mt-2 mx-auto'>Explore our products →</Link>
      </div>
    </div>
  );
}

export default Stats
