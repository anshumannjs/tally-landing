import React from 'react'
import '../App.css'
import img from '../Boxy.svg'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SecurityIcon from '@mui/icons-material/Security'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import PsychologyIcon from '@mui/icons-material/Psychology'

export default function CardType1(props) {
    return (
        <div className="card md:w-[24%] shadow-2xl p-5 glassEffect text-black cardTheme">
            <div className={`${props.color} rounded-xl w-12 h-12 mx-auto flex items-center`}>
                {
                    props.icon
                }
            </div>
          
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-[#001B41] title">{props.title}</h2>
                <p>{props.para}</p>
                <div className="flex items-center text-violet-500 cursor-pointer">
                    Learn More
                    <ArrowForwardIcon fontSize='small'/>
                </div>
            </div>
        </div>
    )
}
