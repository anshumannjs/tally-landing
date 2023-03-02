import React from 'react'
import DoneIcon from '@mui/icons-material/Done'
import '../App.css'

export default function CardType2ndCard() {
    return (
        <div className="card lg:card-side glassEffect text-black shadow-2xl w-[90%] mx-auto mt-10 cardTheme">
            <div className="card-body">
                <div className='w-full'>
                    <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
                        Import & Label
                    </div>
                </div>
                <h2 className="card-title text-4xl text-[#001B41] title">Labelling Your Statements- In Bulk & Faster</h2>
                <p>Just import your Bank Documents & Glassball Intuitevely understands its against your ledgers <br /> Start Labelling them with easy shortcut keys or in bulk  </p>
               
               
                <div className='flex justify-end'>
                    <div className='w-[50%] space-y-2'>
                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                               Multiple companies
                            </div>
                        </div>

                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                               All Bank Documents Supported
                            </div>
                        </div>

                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Auto Suggest Vouchers
                            </div>
                        </div>
                    </div>

                    <div className='w-[50%] space-y-2'>
                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{ color: "green" }} fontSize='small' />
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                               Confirmity to company-wide Voucher categories
                            </div>
                        </div>

                        <div className='flex'>
                            <div className={`bg-green-200 rounded-full w-7 h-7 flex items-center`}>
                                <DoneIcon className='mx-auto' style={{color:"green"}} fontSize='small'/>
                            </div>
                            <div className='font-bold ml-2 text-[#001B41]'>
                                Label in Bulk
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure><img src="https://infocrest.in/images/solution/business-plan.png" alt="Album" /></figure>
        </div>
    )
}
