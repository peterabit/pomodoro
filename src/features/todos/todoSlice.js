import { createSlice } from '@reduxjs/toolkit'

const getRandom = () => {
  return Math.floor(Math.random() * 1000000)
}

const getIndexById = ary =>
  id => ary.findIndex(el => +el.id === +id)

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    filter: 'all',
    filterTypes: ['all', 'undone', 'done']
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const { id, text } = action.payload
        state.todos.push({ id, text, completed: false })
      },
      prepare: text => {
        return { payload: { id: getRandom(), text } }
      }
    },
    toggleCompleted(state, action) {
      const targetIndex = getIndexById(state.todos)(action.payload)
      state.todos[targetIndex].completed = !state.todos[targetIndex].completed
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
  }
})

export const { addTodo, toggleCompleted, updateTodo, deleteTodo, setFilter } = todoSlice.actions

export default todoSlice.reducer