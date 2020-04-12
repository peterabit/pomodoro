import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let countInterval = null

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
        dispatch({ type: 'clock/toggleMode' })
      }
      dispatch({ type: 'countDown' })
    }, 1000);
  }
)

const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    mode: 'work', // work or rest
    modeTime: {
      work: 1800,
      rest: 300
    },
    status: 'stop ', // running, stop
    time: 1800
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
    }
  },
  extraReducers: {
    [start.fulfilled]: (state, action) => {
      state.status = 'running'
    },
    countDown(state, action) {
      state.time -= 1
    }
  }
})

export const { stop, reset, toggleMode } = clockSlice.actions

export default clockSlice.reducer
