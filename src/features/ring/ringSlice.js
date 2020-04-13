import { createSlice } from '@reduxjs/toolkit'
import { WORK_TIMESUP, REST_TIMESUP } from 'features/clock/clockSlice'

const ringSlice = createSlice({
  name: 'ring',
  initialState: {
    rings: {
      HalloWord: 'asdsasd.sss',
      HalloWord1: 'asdsasd.sss',
      HalloWord2: 'asdsasd.sss',
      HalloWord3: 'asdsasd.sss',
      HalloWord4: 'asdsasd.sss',
    },
    restRing: 'HalloWord',
    workRing: 'HalloWord2'
  },
  reducers: {
    setRestRing(state, action) {
      state.restRing = action.payload
    },
    setWorkRing(state, action) {
      state.workRing = action.payload
    }
  },
  extraReducers: {
    [WORK_TIMESUP]: (state, action) => {

    },
    [REST_TIMESUP]: (state, action) => {

    }
  }
})

export const { setRestRing, setWorkRing } = ringSlice.actions
export default ringSlice.reducer