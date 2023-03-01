import React from 'react'
import CardType1stCard from '../../Components/CardType2-1stCard'
import CardType2ndCard from '../../Components/CardType2-2ndCard'
import CardType3rdCard from '../../Components/CardType2-3rdCard'
import '../../App.css'

export default function CardsSection() {
  return (
    <div className='glassEffect mt-10 pb-10'>
        <CardType1stCard />
        <CardType2ndCard />
        <CardType3rdCard />
    </div>
  )
}
