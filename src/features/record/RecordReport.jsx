import React from 'react'
import TimeBarChart from './TimeBarChart'
import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

const workTimesSelector = createSelector(
  ({ record }) => record.workTimes,
  (workTimes) => {
    const data = []
    for (const date in workTimes) {
      data.push({ x: date, y: workTimes[date] })
    }
    return data
  }
)

const RecordReport = () => {
  const centerTime = useSelector(({ record }) => record.chartCenter)
  const data = useSelector(workTimesSelector)
  return (
    <>
      <TimeBarChart data={data} centerTime={centerTime} />
    </>
  )
}

export default RecordReport
