import React from 'react'
import { useSelector } from 'react-redux'
import getTodayString from 'utils/getDateString'

const Times = ({ className, ...attrs }) => {
  const total = useSelector(({ record }) => record.workTimes[getTodayString()] || 0)
  return (
    <div className={`h3 text-pink ${className}`} {...attrs}>
      <i className="fas fa-history mr-3 opacity-weak" style={{
        fontSize: '.70em',
      }} />
      {total}
    </div>
  )
}

export default Times
