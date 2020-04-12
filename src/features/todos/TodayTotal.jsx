import React from 'react'
import { useSelector } from 'react-redux'
import getTodayString from 'utils/getTodayString'

const TodayTotal = ({ className, ...attrs }) => {
  const total = useSelector(({ todo }) => todo.dailyTotal[getTodayString()] || 0)
  return (
    <div className={`h3 text-pink ${className}`} {...attrs}>
      <i className="fas fa-history mr-3" style={{
        fontSize: '.70em',
        opacity: '.75'
      }} />
      {total}
    </div>
  )
}

export default TodayTotal
