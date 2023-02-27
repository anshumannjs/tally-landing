import React from 'react'
import StarIcon from '@mui/icons-material/Star';

export default function RatingComponent() {
  return (
    <div className='flex flex-col md:flex-row border-2 border-gray-400 w-[90%] mx-auto mt-10 p-5 rounded-lg justify-around'>
        <div className='md:w-[50%] w-full'>
            <div className='font-bold text-xl'>
                More than 13,000 teams use Sassimi platform
            </div>

            <div className='mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime provident magni culpa officia consequatur in quis magnam beatae natus, praesentium optio, velit facilis veniam nobis distinctio, explicabo quod. Hic!
            </div>
        </div>

        <div className='md:w-[30%] w-full flex justify-between'>
            <div className='space-y-2'>
            <div className='font-bold text-2xl'>
                4.9
            </div>

            <div>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            </div>

            <div>
                Capterra
            </div>
            </div>

            <div className='space-y-2'>
            <div className='font-bold text-2xl'>
                4.8
            </div>

            <div>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            <StarIcon style={{color:'yellow'}}/>
            </div>

            <div>
                Trustpilot
            </div>
            </div>
        </div>
    </div>
  )
}
