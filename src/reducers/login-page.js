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
        case 'REGISTER_REQUEST': {
            const validationContainer = []
            const registerContainer = {}

            for (let key in action.payload) {

                let type = action.payload[key].type
                let errorStatus = action.payload[key].err
                let value = action.payload[key].value

                if (!errorStatus && value) {
                    validationContainer.push(true)
                    if (type == 'passwordConfirm') continue
                    registerContainer[type] = value

                }
                else validationContainer.push(false)
            }

            let validationIsCorrect = !validationContainer.includes(false)

            if (validationIsCorrect) {
                const newUser = JSON.stringify(registerContainer)
                localStorage.setItem('user', newUser)
                alert(`Welcome to the party, ${registerContainer.name}!
confirm mail was sent to your box ${registerContainer.email} !
            `)

            }

        }
        default:
            return state.loginPage
    }


}

export default updateLoginPage