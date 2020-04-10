import { createSlice } from '@reduxjs/toolkit'

const getRandom = () => {
  return Math.floor(Math.random() * 1000000)
}

const getIndexById = ary =>
  id => ary.findIndex(el => +el.id === +id)

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare: text => {
        return { payload: { id: getRandom(), text } }
      }
    },
    toggleCompleted(state, action) {
      const targetIndex = getIndexById(state)(action.payload)
      state[targetIndex].completed = !state[targetIndex].completed
    },
    updateTodo(state, action) {
      const { id, text } = action.payload
      const targetTodo = state.find(el => +el.id === +id)
      targetTodo.text = text
    },
    deleteTodo(state, action) {
      return state.filter(el => +el.id !== +action.payload)
    }
  }
})

export const { addTodo, toggleCompleted, updateTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer