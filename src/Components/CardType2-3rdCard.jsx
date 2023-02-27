import React from 'react'
import MemoryIcon from '@mui/icons-material/Memory'
import SyncIcon from '@mui/icons-material/Sync'

export default function CardType3rdCard() {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-[90%] mx-auto mt-10">
            <figure><img src="https://infocrest.in/images/solution/business-plan.png" alt="Album" /></figure>
            <div className="card-body">
                <div className='w-full'>
                <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
                    CUSTOM REPORTS
                </div>
                </div>
                <h2 className="card-title text-4xl">Custom report that guides your decision-making</h2>
                <p>The customer journey differs for everybody-whether you use them together or on their own, our products are flexible enough to pave the path that's best for you.</p>
                <hr className='border border-black'/>
                <div className='justify-end space-y-3'>
                    <div className='flex space-x-3'>
                        <div className='font-bold text-xl'>
                            25%
                        </div>
                        <div className=''>
                            Increase in retention
                        </div>
                    </div>

                    <div className='flex space-x-3'>
                        <div className='font-bold text-xl'>
                            1.7X
                        </div>
                        <div className=''>
                            User base growth
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
