import React from 'react'
import { useSelector } from 'react-redux'
import RingItem from './RingItem'

const RingList = ({ className, ...attrs }) => {
  const rings = useSelector(({ ring }) => ring.rings)
  const rNames = Object.keys(rings) || []
  return (
    <ul className={`pl-0 ${className}`}>
      {rNames.map((rName, i) => (
        <RingItem key={i} rId={rName}>
          {rName}
        </RingItem>
      ))}
    </ul>
  )
}

export default RingList
