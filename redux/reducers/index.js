//Can npm i cra-template-redux to avoid boilerplate code

import { combineReducers } from 'redux'

import CartReducer from './cartReducer'

let reducers = combineReducers({
    cartReduce: CartReducer,
})

// const rootReducer = (state, action) => {
//     return reducers(state, action)
// }

export default reducers