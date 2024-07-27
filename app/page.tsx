
'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/slice/CounterSlice'
import Comp1 from '@/components/Comp1'
import Comp2 from '@/components/Comp2'


export default function Home(){



  return (
    <div className='container mx-auto flex flex-col justify-evenly items-center border'>
      <Comp1/>
      <Comp2/>
    </div>
  )
}
 