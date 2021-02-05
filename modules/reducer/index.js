import { combineReducers } from "redux"
import { FAILURE, LOADING, SUCCESS } from "../action/action"
import { login } from "./userReducer"
import { report } from "./reportReducer"

const initialState = {
	status: "initial",
	payload: null,
	error: null,
}

export const initReducer = (property) => (state = initialState, action) => {
	switch (action.type) {
		case LOADING(property):
			return {
				...state,
				status: "loading",
				error: null,
			}
		case SUCCESS(property):
			return {
				...state,
				status: "success",
				error: null,
				payload: action.payload.data,
			}
		case FAILURE(property):
			return {
				...state,
				status: "failure",
				error: action.payload,
				payload: null,
			}
		default:
			return state
	}
}

const init = initReducer("init")
const Reducers = combineReducers({ init, login, report })

export default Reducers
