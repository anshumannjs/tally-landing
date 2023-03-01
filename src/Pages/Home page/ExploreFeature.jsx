import React from 'react'
import '../../App.css'
import CardType1 from '../../Components/CardType1'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff'
import SecurityIcon from '@mui/icons-material/Security'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import PsychologyIcon from '@mui/icons-material/Psychology'

export default function ExploreFeature() {
  return (
    <div className='mt-16 w-full text-center bg p-5'>
      <div className='bg-green-200 text-green-900 font-bold p-2 rounded-full inline-block'>
        FEATURES
      </div>

      <div className='font-bold text-4xl mt-5 text-[#001B41]'>
        Explore our amazing features
      </div>

      <div className='mt-3 w-[50%] mx-auto text-black'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti neque facere cupiditate iste, molestias, explicabo, modi architecto molestiae eos iure? Neque reprehenderit, voluptatibus sint debitis ea ratione adipisci quaerat!
      </div>

      <div className='flex mt-5 flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 px-3'>
        <CardType1 color='bg-cyan-300' icon={<DataSaverOffIcon className='mx-auto' />} title={'Analyze your data'} para={'Create reports with an easy to use drag & drop designer'} />
        <CardType1 color='bg-yellow-300' icon={<SecurityIcon className='mx-auto' />} title={'Collaborate securely'} para={'Share/publish your reports with your colleagues'} />
        <CardType1 color='bg-orange-300' icon={<AnalyticsIcon className='mx-auto' />} title={'Embedded analytics'} para={'Get a powerful analytics tool in your own brand name'} />
        <CardType1 color='bg-pink-300' icon={<PsychologyIcon className='mx-auto' />} title={'Easy and Intuitive'} para={'Easily converse with your data using everyday language'} />
      </div>
    </div>
  )
}
