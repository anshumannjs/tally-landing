import React from 'react'
import MemoryIcon from '@mui/icons-material/Memory'
import SyncIcon from '@mui/icons-material/Sync'
import '../App.css'

export default function CardType1stCard() {
    return (
        <div className="card lg:card-side glassEffect text-black shadow-2xl w-[90%] mx-auto mt-10 cardTheme">
            <figure><img src="https://infocrest.in/images/solution/business-plan.png" alt="Album" /></figure>
            <div className="card-body">
                <div className='w-full'>
                <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
                    FEATURES
                </div>
                </div>
                <h2 className="card-title text-4xl text-[#001B41] title">Connect & import your Tally Data</h2>
                <p>With just one click, import all your Tally Data into GlassBall Plugin - Your <b>Companies</b> and its associated <b>ledgers</b> and <b> vouchers </b> are automatically synced with Glassball</p>
               
                <div className='flex justify-center'>
                    <div className='w-[50%]'>
                        <div className={`bg-yellow-200 rounded-xl w-12 h-12 flex items-center mx-auto`}>
                            <MemoryIcon className='mx-auto'/>
                        </div>
                        <div className='font-bold text-lg text-[#001B41] text-center'>
                            Secure Connection
                        </div>
                        <p>
                            Glassball connects only to local Tally and does not involve any external data transmission over the cloud
                        </p>
                    </div>

                    <div className='w-[50%]'>
                        <div className={`bg-cyan-200 rounded-xl w-12 h-12 flex items-center mx-auto`}>
                            <SyncIcon className='mx-auto'/>
                        </div>
                        <div className='font-bold text-lg text-[#001B41] text-center'>
                            Always in sync
                        </div>
                        <p className='text-center'>
                            Your Tally Data is always sycned, in Real-time
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
