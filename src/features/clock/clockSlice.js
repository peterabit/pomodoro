import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

let countInterval = null

export const WORK_TIMESUP = 'WORK_TIMESUP'
export const REST_TIMESUP = 'REST_TIMESUP'
export const COUNT_DOWM = 'COUNT_DOWM'
export const workTimesUp = createAction(WORK_TIMESUP)
export const restTimesUp = createAction(REST_TIMESUP)
export const countDown = createAction(COUNT_DOWM)

export const start = createAsyncThunk(
  'clock/start',
  async (p, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const { status } = getState().clock
    if (status === 'running') {
      throw new Error()
    }
    countInterval = setInterval(() => {
      const { clock } = getState()
      if (+clock.time === 0) {
        if (clock.mode === 'work') {
          dispatch(workTimesUp())
        } else {
          dispatch(restTimesUp())
        }
      }
      dispatch({type: 'clock/countDown'})
    }, 1000);
  }
)

const modeTime = {
  work: 5,
  rest: 3
}

const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    mode: 'work', // work or rest
    modeTime: modeTime,
    status: 'stop ', // running, stop
    time: modeTime['work']
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
