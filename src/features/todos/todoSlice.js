import { createSlice } from '@reduxjs/toolkit'
import getTodayString from 'utils/getTodayString'

const getRandom = () => {
  return Math.floor(Math.random() * 1000000)
}

const getLocalstorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    return false
  }
}

const today = getTodayString()

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: getLocalstorage('todos') || [],
    filter: 'all',
    filterTypes: ['all', 'undone', 'done'],
    dailyTotal: getLocalstorage('dailyTotal') || {}
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const { id, text } = action.payload
        state.todos.unshift({ id, text, completed: false })
      },
      prepare: text => {
        return { payload: { id: getRandom(), text } }
      }
    },
    toggleCompleted(state, action) {
      const targetTodo = state.todos.find(el => +el.id === +action.payload)
      targetTodo.completed = !targetTodo.completed
    },
    updateTodo(state, action) {
      const { id, text } = action.payload
      const targetTodo = state.todos.find(el => +el.id === +id)
      targetTodo.text = text
    },
    deleteTodo(state, action) {
      const newTodos = state.todos.filter(el => +el.id !== +action.payload)
      state.todos = newTodos
    },
    setFilter(state, action) {
      state.filter = action.payload
    }
  },
  extraReducers: {
    timesUp(state, action) {
      state.dailyTotal[today] ? state.dailyTotal[today] += 1 : state.dailyTotal[today] = 1
    }
  }
})

export const { addTodo, toggleCompleted, updateTodo, deleteTodo, setFilter } = todoSlice.actions

export default todoSlice.reducer