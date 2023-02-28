import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StoreIcon from '@mui/icons-material/Store';
import BusinessIcon from '@mui/icons-material/Business';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function Partners() {
    return (
        <div className='flex w-full pt-10 bg-white text-black'>
            <div className='font-bold  w-[30%]'>
                Trusted by industry leaders
            </div>

            <div className='flex w-[70%] justify-around'>
                <GoogleIcon />
                <YouTubeIcon />
                <StoreIcon />
                <BusinessIcon />
                <ApartmentIcon />
            </div>
        </div>
    )
}
