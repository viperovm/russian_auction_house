import { combineReducers } from "redux"
import siteReducer from "./siteReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  site: siteReducer,
  auth: authReducer,
})

export default rootReducer
