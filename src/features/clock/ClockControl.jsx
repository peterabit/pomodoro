import React from 'react'
import TextBtn from 'components/TextBtn'

const ClockControl = ({ running }) => {
  const runningMode = running ? (
    <i className="fas fa-pause"></i>
  ) : (
    <i className="fas fa-play"></i>
  )
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <TextBtn style={{ fontSize: '32px' }}>{runningMode}</TextBtn>
      <TextBtn className="mt-1 text-pink-light" style={{ fontSize: '20px' }}>
        <i className="fas fa-redo-alt"></i>
      </TextBtn>
    </div>
  )
}

export default ClockControl
