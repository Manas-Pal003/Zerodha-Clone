import CEO from '../../assets/CEO.jpg'
import Nithin from '../../assets/Nithin.webp'
import Seema from '../../assets/Seema.jpg'
import Venu from '../../assets/Venu.jpg'
import Karthik from '../../assets/Karthik.avif'
import Kailash from '../../assets/Kailash Nadh.jpeg'


const Image = () => {
  return (
    <div className='flex flex-row justify-center  gap-15 mt-30 mb-40 '>
        <div className='flex justify-center items-center flex-col'>
            <img src={CEO} alt='CEO' className='w-full  border-radius-[50%] h-50 rounded-full mb-5'/>
            <h2 className='font-medium text-lg'>Nithin Kamath</h2>
            <p>Co-founder & CFO</p>      
        </div>

        <div className='flex justify-center items-center flex-col'>
            <img src={Kailash} alt='Kailash' className='w-full  border-radius-[50%] h-50 rounded-full mb-5'/>
            <h2 className='font-medium text-lg'>Dr. Kailash Nadh</h2>
            <p>CTO</p>      
        </div>

        <div className='flex justify-center items-center flex-col'>
            <img src={Venu} alt='Venu' className='w-full  border-radius-[50%] h-50 rounded-full mb-5'/>
            <h2 className='font-medium text-lg'>Venu Madhav</h2>
            <p>COO</p>      
        </div>
        <div className='flex justify-center items-center flex-col'>
            <img src={Seema} alt='Seema' className='w-full border-radius-[50%] h-50 rounded-full mb-5'/>
            <h2 className='font-medium text-lg'>Seema Rao</h2>
            <p>Director</p>      
        </div>

        <div className='flex justify-center items-center flex-col'>
            <img src={Karthik} alt='Karthik' className='w-[100%] border-radius-[50%] h-50 rounded-full mb-5'/>
            <h2 className='font-medium text-lg'>Karthik Rangappa</h2>
            <p>Chief of Education</p>      
        </div>


    </div>
  )
}

export default Image