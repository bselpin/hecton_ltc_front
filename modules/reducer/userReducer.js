export const login = (user, action) => {
	const users = JSON.parse(localStorage.getItem("user"))
	const login = localStorage.getItem("key") ? true : false
	switch (action.type) {
		case "LOGIN":
			return { user: { ...action.user }, login: action.login }
		case "LOGOUT":
			return { user: {}, login: false }
		case "DETAIL":
			return { user: { ...action.user }, login: true }
		default:
			return { user: { ...users }, login: login }
	}
}
