import { combineReducers } from 'redux'
import todo from 'features/todos/todoSlice'
import clock from 'features/clock/clockSlice'

export default combineReducers({ todo, clock })