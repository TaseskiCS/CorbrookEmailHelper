import React, {useState, useEffect} from 'react';
import corbrook from './assets/corbrook.png';
import JobCard from './components/JobCard.jsx';
export default function App() {
    const [showJobCard, setShowJobCard] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [noJobs, setNoJobs] = useState(false);
    const handleAddJob = () => {
        setShowJobCard(true);
    }
    const checkJobs = () => {
        if (jobs.length === 0) {
            setNoJobs(true);
        } else {
            setNoJobs(false);
        }
    }
    useEffect(() => {
        checkJobs();
    }, []);
    return (
        <div>
            <div className='flex justify-between items-center p-4'>
                <img className='w-24' src={corbrook} alt='logo' />
                <h1>Job Matching Tool</h1>
                <div className='flex items-center gap-4'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => {
                        handleAddJob();
                    }}>
                        +
                    </button>
                </div>
            </div>
            {showJobCard && 
            <div className='flex justify-center items-center rounded-md p-4'>
                <div className='flex flex-col gap-4 p-5 bg-slate-500 rounded-md'>
                    <div className='flex justify-end'>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded-md' onClick={() => {
                                setShowJobCard(false);
                            }}>
                                X
                        </button>
                        
                    </div>
                    
                    <JobCard />
                    <button className='bg-blue-500 text-white px-2 py-1 rounded-md' onClick={() => {
                                setShowJobCard(false);
                            }}>
                                Send Emails
                        </button>
                   
                </div>
                
            </div>}
            {noJobs && !showJobCard && 
            <div className='flex justify-center items-center rounded-md p-4'>
                <div className='flex flex-col gap-4 p-5 bg-slate-500 rounded-md'>
                    <h1>No jobs added yet</h1>
                </div>
            </div>
            }
        </div>
        
  )
}


