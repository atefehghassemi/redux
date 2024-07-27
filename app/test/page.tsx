'use client'
import React from 'react'
import { useSelector } from 'react-redux'

function page() {
    const count = useSelector((state: any) => state.counter.count)

  return (
    <div>count is :{count}</div>
  )
}

export default page