import React from 'react'
import CardType1 from '../../Components/CardType1'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff'
import SecurityIcon from '@mui/icons-material/Security'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import PsychologyIcon from '@mui/icons-material/Psychology'

export default function ExploreFeatureCards() {
  return (
    <div className='flex mt-5 flex-col md:flex-row'>
        <CardType1 color='bg-cyan-300' icon={<DataSaverOffIcon className='mx-auto'/>} title={'Analyze your data'} para={'Create reports with an easy to use drag & drop designer'}/>
        <CardType1 color='bg-yellow-300' icon={<SecurityIcon className='mx-auto'/>} title={'Collaborate securely'} para={'Share/publish your reports with your colleagues'}/>
        <CardType1 color='bg-orange-300' icon={<AnalyticsIcon className='mx-auto'/>} title={'Embedded analytics'} para={'Get a powerful analytics tool in your own brand name'}/>
        <CardType1 color='bg-pink-300' icon={<PsychologyIcon className='mx-auto'/>} title={'Easy and Intuitive'} para={'Easily converse with your data using everyday language'}/>
    </div>
  )
}
