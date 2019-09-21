const { createStore, combineReducers } = require('redux')
const { accounting, policies, claimsHistory } = require('./reducers')
const {  createPolicy, deletePolicy, createClaim,} = require('./actions')

const ourDepartments = combineReducers({
  accounting,
  policies,
  claimsHistory,
})

const store = createStore(ourDepartments)

store.dispatch(createPolicy('Ian', 5000))
store.dispatch(createPolicy('Jane', 20000))
store.dispatch(createPolicy('Jim', 500))
store.dispatch(createClaim('Jim', 1200))
store.dispatch(deletePolicy('Ian'))

console.log(store.getState())