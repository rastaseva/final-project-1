import { combineReducers } from 'redux'
import { signFormReducer } from './signFormReducer'

export const rootReducer = combineReducers({
    signForm: signFormReducer.reducer
})