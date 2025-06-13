import React, {useState} from 'react'
import corbrook from '../assets/corbrook.png'
import JobCard from './JobCard.jsx';
const NavBar = () => {
    const [showJobCard, setShowJobCard] = useState(false);
    const handleAddJob = () => {
        setShowJobCard(true);
    }
  return (
    <div className='flex justify-between items-center p-4'>
        <img className='w-60' src={corbrook} alt='logo' />
        <div className='flex items-center gap-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => {
                handleAddJob();
            }}>
                +
            </button>
        </div>
        {showJobCard && <JobCard />}
    </div>
  )
}

export default NavBar