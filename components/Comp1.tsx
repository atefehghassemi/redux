import { decrement, increment } from '@/slice/CounterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function Comp1() {
    const dispatch = useDispatch()
  return (
    <div className=' border-2 border-green-600'>
    <button 
    className=' p-4 border rounded'
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>
    <button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>
  </div>
  )
}

export default Comp1