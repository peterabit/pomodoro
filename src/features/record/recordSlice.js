import { createSlice } from '@reduxjs/toolkit'
import getTodayString from 'utils/getDateString'
import { WORK_TIMESUP } from 'features/clock/clockSlice'
import getFromLocalstorage from 'utils/getFromLocalStorage'

const today = getTodayString()
const record = createSlice({
  name: 'record',
  initialState: {
    chartCenter: Date.now(),
    workTimes: getFromLocalstorage('work_times') || {},
  },
  reducers: {
    setChartCenter: (state, action) => {
      state.chartCenter = action.payload
    },
    extraReducers: {
      [WORK_TIMESUP]: (state, action) => {
        state.workTimes[today] ? state.workTimes[today] += 1 : state.workTimes[today] = 1
      }
    }
  }
})

export const { setChartCenter } = record.actions
export default record.reducer