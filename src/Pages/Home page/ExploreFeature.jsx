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
            How Glassball saves my Anlayst Time?    
      </div>

      <div className='font-bold text-4xl mt-5 text-[#001B41]'>
      Why Glassball Would be loved by your Analyst?

      </div>

      <div className='mt-3 w-[50%] mx-auto text-black'>
Glassball's Advanced Algoritham, reads your pre-existing lables & Auto-suggests labels, saving your time on Labelling and ability to apply it to ledgers in Bulk
      </div>

      <div className='flex mt-5 flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 px-3'>
        <CardType1 color='bg-cyan-300' icon={<DataSaverOffIcon className='mx-auto' />} title={'Connect your Tally'} para={'Connect all your Companies, Ledgers & vouchers with just a click'} />
        <CardType1 color='bg-yellow-300' icon={<SecurityIcon className='mx-auto' />} title={'Your Tally, Your Data'} para={'Your Tally Data is reflected as is -  All Clients, vouchers & Transaction types'} />
        <CardType1 color='bg-orange-300' icon={<AnalyticsIcon className='mx-auto' />} title={'One Click - Labelling'} para={'Label your Ledgers Automatically, in Single or Bulk using same Tally Shortcuts or in Bulk'} />
        <CardType1 color='bg-pink-300' icon={<PsychologyIcon className='mx-auto' />} title={'Submit & Sync'} para={'All your Labelling, gets synced to Tally with a just a click'} />
      </div>
    </div>
  )
}
