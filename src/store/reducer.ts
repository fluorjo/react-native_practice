import {combineReducers} from 'redux'

import userSlice from '../slices/user'

//이게 전체 상태.
const rootReducer = combineReducers({
  user: userSlice.reducer,
})

//타입스크립트와 관련

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
