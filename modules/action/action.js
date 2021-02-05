/* eslint-disable no-unused-vars */
import { post, get } from "../../common/api"
import { toastCall } from "../../common/toastCall"

const setLocal = (data) => {
	localStorage.setItem("user", JSON.stringify(data.user))
	localStorage.setItem("key", data.token)
}

const unSetLocal = () => {
	localStorage.removeItem("user")
	localStorage.removeItem("key")
}

export const LOADING = (property) => `${property}/loading`
export const SUCCESS = (property) => `${property}/success`
export const FAILURE = (property) => `${property}/failure`
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const DETAIL = "DETAIL"

export const loading = (property) => ({
	payload: {},
	type: LOADING(property),
})

export const success = (property, payload) => ({
	payload,
	type: SUCCESS(property),
})

export const failure = (property, error) => ({
	payload: { error },
	type: FAILURE(property),
})

// 로그인
export const loginCall = (data, callback, failCallback) => {
	return async (dispatch) => {
		return await post("auth/login", data)
			.then((res) => {
				if (res.data) {
					dispatch({
						type: LOGIN,
						user: { ...res.data.user },
						login: true,
					})
					callback()
					setLocal(res.data)
				} else {
					failCallback()
				}
			})
			.catch(() => failCallback())
	}
}

// 로그아웃
export const logoutCall = () => {
	return async (dispatch) => {
		return await get("auth/logout")
			.then((res) => {
				dispatch({
					type: LOGOUT,
					user: {},
					login: false,
				})
				unSetLocal()
				toastCall("로그아웃 되었습니다")
			})
			.catch((e) => console.log(e))
	}
}

// 토큰 유효성 체크
export const loginCheck = () => {
	const token = localStorage.getItem("key")
	const config = {
		Authorization: `Bearer ${token}`,
	}
	return async (dispatch) => {
		return await get("auth/loginCheck", config)
			.then((res) => {
				if (res.data !== 0) {
					userDetail()
				} else {
					dispatch({
						type: LOGOUT,
						user: {},
						login: false,
					})
					unSetLocal()
				}
			})
			.catch((e) => {
				dispatch({
					type: LOGOUT,
					user: {},
					login: false,
				})
				unSetLocal()
			})
	}
}

// sns 로그인
export const authLogin = (data) => {
	return (dispatch) => {
		setLocal(data)
		return dispatch({
			type: LOGIN,
			user: { ...data.user },
			login: true,
		})
	}
}

// 토큰 갱신
export const loginRefresh = (data) => {
	return (dispatch) => {
		return dispatch({
			type: LOGIN,
			user: { ...data.user },
			login: true,
		})
	}
}

// 유저 정보 상세 조회
export const userDetail = () => {
	return async (dispatch) => {
		return await get("user/detail")
			.then((res) => {
				dispatch({
					type: LOGIN,
					user: { ...res.data },
					login: true,
				})
			})
			.catch((e) => console.log(e))
	}
}
