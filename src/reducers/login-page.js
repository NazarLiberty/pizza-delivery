import { act } from "react-dom/test-utils"

const updateLoginPage = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': {
            return {
                ...state.loginPage,
                logged: true,
                password: action.payload.password,
                nickName: action.payload.nick,
            }
        }
        case 'LOG_OUT': {
            return {
                ...state.loginPage,
                logged: false,
                password: '',
                nickName: '',
            }
        }
        default:
            return state.loginPage
    }


}

export default updateLoginPage