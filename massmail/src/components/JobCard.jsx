import React, { useState } from 'react'

const JobCard = () => {
    const [candidates, setCandidates] = useState(53);
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState(0);
    const [newdistance, setNewDistance] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }
    return (
    <div className='flex flex-col gap-4'>
        <input type='text' placeholder='Job Company' />
        <input type='text' placeholder='Job Title' />
        <input type='text' placeholder='Job Location' />
        <h1>Distance Threshold (in time)</h1>
        <input type='range' placeholder='Distance Filter' />
        <div className='flex justify-between gap-4 row items-center'>
            <h3>Eligible Candidates Within Distance</h3>
            <h3 className=' p-2 bg-white text-black'>{candidates}</h3>

        </div>
        
        
    </div>
  )
}

export default JobCard