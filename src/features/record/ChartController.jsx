import React from 'react'
import DatePicker from 'components/DatePicker'
import { useSelector, useDispatch } from 'react-redux'
import { setChartCenter } from "features/record/recordSlice";

const ChartController = ({ ...attrs }) => {
  const dispatch = useDispatch()
  const date = useSelector(({ record }) => record.chartCenter) || new Date()
  const pickerHandler = (e) => dispatch(setChartCenter(e.valueOf()))
  return (
    <div {...attrs}>
      <DatePicker selected={date} onChange={pickerHandler} className="w-110px" />
    </div>
  )
}

export default ChartController
