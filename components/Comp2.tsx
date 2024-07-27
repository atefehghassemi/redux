import React from 'react'
import { useSelector } from 'react-redux'

function Comp2() {
    const count = useSelector((state: any) => state.counter.count)

  return (
    <div className=' border-2 border-yellow-400'><span>{count}</span></div>
  )
}

export default Comp2