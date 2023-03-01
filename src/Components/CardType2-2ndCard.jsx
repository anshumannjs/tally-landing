import React from 'react'
import DoneIcon from '@mui/icons-material/Done'
import '../App.css'

export default function CardType2ndCard() {
    return (
        <div className="card lg:card-side bg-white text-black shadow-2xl w-[90%] mx-auto mt-10">
            <div className="card-body">
                <div className='w-full'>
                    <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
                        COLLABORATE
                    </div>
                </div>
                <h2 className="card-title text-4xl text-[#001B41]">Collaborate with your team anytime, anywhere</h2>
                <p>See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.</p>
                <hr className='border border-black' />
                <div className='flex justify-end'>
                    <div className='w-[50%] space-y-2'>
                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Organise your data
                            </div>
                        </div>

                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Work with any team
                            </div>
                        </div>

                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Business analytics
                            </div>
                        </div>
                    </div>

                    <div className='w-[50%] space-y-2'>
                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Always in sync
                            </div>
                        </div>

                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{color:"green"}} fontSize='small'/>
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Embedded analytics
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure><img src="https://infocrest.in/images/solution/business-plan.png" alt="Album" /></figure>
        </div>
    )
}
