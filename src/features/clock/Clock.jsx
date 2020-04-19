import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { transSecondToMinute } from 'utils/timeTransform'

const Clock = ({ className = '' }) => {
  const { time, modeTime, mode } = useSelector(({ clock }) => clock)
  const secondTimd = transSecondToMinute(time)
  const leftSlice = useRef()
  const rightSlice = useRef()
  useEffect(() => {
    const totalTime = modeTime[mode]
    const rate = time / totalTime
    let rotateAngle = -rate * 360
    if (rate >= 0.5) {
      rightSlice.current.style.opacity = '1'
      rightSlice.current.style.transform = `rotate(${rotateAngle}deg)`
      leftSlice.current.style.transform = ''
    } else {
      rotateAngle += 180
      leftSlice.current.style.transform = `rotate(${rotateAngle}deg)`
      rightSlice.current.style.opacity = '0'
    }
  }, [time, mode])
  return (
    <div
      className={`clock d-flex justify-content-center align-items-center ${className}`}
    >
      <div className="clock__slice--left" />
      <div ref={leftSlice} className="clock__cover-slice--left" />
      <div className="clock__slice--right" />
      <div ref={rightSlice} className="clock__cover-slice--right" />
      <p className="h1 text-pink position-relative">
        {secondTimd[0] + '：' + secondTimd[1]}
      </p>
    </div>
  )
}

export default Clock
