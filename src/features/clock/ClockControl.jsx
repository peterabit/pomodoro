import React from 'react'
import TextBtn from 'components/TextBtn'
import { useDispatch, useSelector } from 'react-redux'
import { start, stop, reset, toggleMode } from 'features/clock/clockSlice'

const ClockControl = () => {
  const dispatch = useDispatch()
  const startCount = () => dispatch(start())
  const stopCount = () => dispatch(stop())
  const resetClock = () => dispatch(reset())
  const toggle = () => dispatch(toggleMode())
  const status = useSelector(({ clock }) => clock.status)
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <TextBtn
        onClick={toggle}
        className="text-pink-light"
        style={{ fontSize: '20px' }}
      >
        <i className="fas fa-random"></i>
      </TextBtn>
      <TextBtn
        style={{ fontSize: '32px' }}
        className="mt-2"
        onClick={status === 'running' ? stopCount : startCount}
      >
        {status === 'running' ? (
          <i className="fas fa-pause" />
        ) : (
          <i className="fas fa-play" />
        )}
      </TextBtn>
      <TextBtn
        onClick={resetClock}
        className="mt-2 text-pink-light"
        style={{ fontSize: '20px' }}
      >
        <i className="fas fa-redo-alt" />
      </TextBtn>
    </div>
  )
}

export default ClockControl
