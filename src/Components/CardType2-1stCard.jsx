import React from 'react'
import MemoryIcon from '@mui/icons-material/Memory'
import SyncIcon from '@mui/icons-material/Sync'
import '../App.css'

export default function CardType1stCard() {
    return (
        <div className="card lg:card-side bg-white text-black shadow-2xl w-[90%] mx-auto mt-10">
            <figure><img src="https://infocrest.in/images/solution/business-plan.png" alt="Album" /></figure>
            <div className="card-body">
                <div className='w-full'>
                <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
                    FEATURES
                </div>
                </div>
                <h2 className="card-title text-4xl text-[#001B41]">We make it effortlessly to track all user analytics</h2>
                <p>Self-service data analytics software that lets you create visually appealing data visuallizations and insightful dashboards in munites</p>
                <hr className='border border-black'/>
                <div className='flex justify-end'>
                    <div className='w-[50%]'>
                        <div className={`bg-yellow-200 rounded-xl w-12 h-12 flex items-center`}>
                            <MemoryIcon className='mx-auto'/>
                        </div>
                        <div className='font-bold text-lg text-[#001B41]'>
                            Powerful dashboard
                        </div>
                        <p>
                            Combine multiple reports into a single beautiful dashboard
                        </p>
                    </div>

                    <div className='w-[50%]'>
                        <div className={`bg-cyan-200 rounded-xl w-12 h-12 flex items-center`}>
                            <SyncIcon className='mx-auto'/>
                        </div>
                        <div className='font-bold text-lg text-[#001B41]'>
                            Always in sync
                        </div>
                        <p>
                            Don't worry about data, always be synchronized
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
