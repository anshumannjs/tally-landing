import React from 'react'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SecurityIcon from '@mui/icons-material/Security'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import PsychologyIcon from '@mui/icons-material/Psychology'

export default function CardType1(props) {
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl p-5">
            <div className={`${props.color} rounded-xl w-12 h-12 mx-auto flex items-center`}>
                {
                    props.icon
                }
            </div>
            <hr className='border border-black mt-8'/>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{props.title}</h2>
                <p>{props.para}</p>
                <div className="flex items-center text-violet-500 cursor-pointer">
                    Learn More
                    <ArrowForwardIcon fontSize='small'/>
                </div>
            </div>
        </div>
    )
}
