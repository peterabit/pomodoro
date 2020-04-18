import { combineReducers } from 'redux'
import todo from 'features/todos/todoSlice'
import clock from 'features/clock/clockSlice'
import ring from 'features/ring/ringSlice'
import record from 'features/record/recordSlice'

export default combineReducers({ todo, clock, ring, record })