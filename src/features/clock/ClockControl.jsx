import React from 'react'
import Button from 'react-bootstrap/Button'
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
    <div className="d-flex flex-row flex-md-column justify-content-center align-items-center">
      <Button
        variant="link"
        onClick={toggle}
        className="opacity-weak"
        style={{ fontSize: '20px' }}
      >
        <i className="fas fa-random"></i>
      </Button>
      <Button
        variant="link"
        style={{ fontSize: '32px' }}
        className="mt-2"
        onClick={status === 'running' ? stopCount : startCount}
      >
        {status === 'running' ? (
          <i className="fas fa-pause" />
        ) : (
          <i className="fas fa-play" />
        )}
      </Button>
      <Button
        variant="link"
        onClick={resetClock}
        className="mt-2"
        className="opacity-weak"
        style={{ fontSize: '20px' }}
      >
        <i className="fas fa-redo-alt" />
      </Button>
    </div>
  )
}

export default ClockControl
