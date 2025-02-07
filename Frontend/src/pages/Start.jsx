import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className='bg-contain
      bg-[url(https://images.unsplash.com/photo-1602773040364-522556233e30?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex justify-between flex-col w-full pt-8'>
        <img className='w-24 ml-3 -mt-6 ' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg" alt="uber logo" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-semibold'>Get Started with Uber</h2>
            <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
