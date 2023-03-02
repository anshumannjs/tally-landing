import React from 'react'
import MemoryIcon from '@mui/icons-material/Memory'
import SyncIcon from '@mui/icons-material/Sync'
import '../App.css'

export default function CardType3rdCard() {
    return (
        <div className="card lg:card-side glassEffect text-black shadow-2xl w-[90%] mx-auto mt-10 cardTheme">
            <figure><img src="https://infocrest.in/images/solution/business-plan.png" alt="Album" /></figure>
            <div className="card-body">
                <div className='w-full'>
                <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
                    Auto-Sync
                </div>
                </div>
                <h2 className="card-title text-4xl title">Submit as Tally Ledgers</h2>
                <p>With Just one click, all your Labelled items, feeds back into Tally as Ledgers, removing the most time consuming process in Identifying and Labelling Ledgers</p>
               
                <div className='justify-end space-y-3'>
                    <div className='flex space-x-3'>
                        <div className='font-bold text-xl'>
                            40%
                        </div>
                        <div className=''>
                            Increase in time-saved per analyst
                        </div>
                    </div>

                    <div className='flex space-x-3'>
                        <div className='font-bold text-xl'>
                            2.7X
                        </div>
                        <div className=''>
                            Productivity Improvement
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
