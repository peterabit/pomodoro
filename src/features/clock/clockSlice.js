import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import getFromLocalStorage from 'utils/getFromLocalStorage'
import { play } from 'features/ring/ringSlice'
let countInterval = null

export const WORK_TIMESUP = 'WORK_TIMESUP'
export const REST_TIMESUP = 'REST_TIMESUP'
export const COUNT_DOWM = 'COUNT_DOWM'
export const workTimesUp = createAction(WORK_TIMESUP)
export const restTimesUp = createAction(REST_TIMESUP)
export const countDown = createAction(COUNT_DOWM)

export const start = createAsyncThunk(
  'clock/start',
  async (payload, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const { status } = getState().clock
    if (status === 'running') {
      throw new Error()
    }
    countInterval = setInterval(() => {
      const { clock, ring } = getState()
      const { workRing, restRing } = ring
      if (+clock.time === 0) {
        if (clock.mode === 'work') {
          dispatch(workTimesUp())
          dispatch(play(workRing))
        } else {
          dispatch(restTimesUp())
          dispatch(play(restRing))
        }
      }
      dispatch({ type: 'clock/countDown' })
    }, 1000);
  }
)

const modeTime = {
  work: 1800,
  rest: 300
}

const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    mode: getFromLocalStorage('clock')?.mode || 'work', // work or rest
    modeTime: modeTime,
    status: 'stop', // running, stop
    time: getFromLocalStorage('clock')?.time || modeTime['work']
  },
  reducers: {
    stop: {
      reducer: (state, action) => {
        state.status = 'stop'
      },
      prepare: () => {
        clearInterval(countInterval)
        return {}
      }
    },
    reset: {
      reducer: (state, action) => {
        const { mode, modeTime } = state
        state.time = modeTime[mode]
        state.status = 'stop'
      },
      prepare: () => {
        clearInterval(countInterval)
        return {}
      }
    },
    toggleMode(state, action) {
      const { mode, modeTime } = state
      const nextMode = mode === 'work' ? 'rest' : 'work'
      state.mode = nextMode
      state.time = modeTime[nextMode]
    },
    countDown(state, action) {
      state.time -= 1
    }
  },
  extraReducers: {
    [start.fulfilled]: (state, action) => {
      state.status = 'running'
    },
    [start.rejected]: (state, action) => {
      console.log(action.payload)
    },
    [WORK_TIMESUP](state, action) {
      const nextMode = 'rest'
      state.mode = nextMode
      state.time = modeTime[nextMode]
    },
    [REST_TIMESUP](state, action) {
      const nextMode = 'work'
      state.mode = nextMode
      state.time = modeTime[nextMode]
    }
  }
})

export const { stop, reset, toggleMode } = clockSlice.actions

export default clockSlice.reducer
