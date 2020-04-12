import React from 'react'
import { useSelector } from 'react-redux'
import tansformTime from 'utils/transSecondToMinute'

const Clock = () => {
  const time = useSelector(({ clock }) => {
    return tansformTime(clock.time)
  })
  return (
    <div className="clock mr-5 border-pink d-flex justify-content-center align-items-center">
      <p className="h1 text-pink">{time[0] + '：' + time[1]}</p>
    </div>
  )
}

export default Clock
