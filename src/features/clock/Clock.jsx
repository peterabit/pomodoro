import React from 'react'
import ClockControl from './ClockControl'

const Clock = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          borderWidth: '7px',
          borderStyle: 'solid',
        }}
        className="border-pink mr-5 d-flex justify-content-center align-items-center"
      >
        <p className="h1 text-pink">29：59</p>
      </div>
      <ClockControl />
    </div>
  )
}

export default Clock
