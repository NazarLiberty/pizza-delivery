const setNewUser = (registerContainer, validationIsCorrect, state) => {
    if (validationIsCorrect) {
        if (isNameBusy(registerContainer)) return {
            ...state.loginPage,
            warningModal: { type: 'name' }
        }
        if (isEmailBusy(registerContainer)) return {
            ...state.loginPage,
            warningModal: { type: 'email' }
        }
        if (localStorage.userList) {
            const usersList = JSON.parse(localStorage.userList)
            usersList.push(registerContainer)
            const newUsersList = JSON.stringify(usersList)
            localStorage.setItem('userList', newUsersList)
        }
        else {
            const newUser = JSON.stringify([registerContainer])
            localStorage.setItem('userList', newUser)
        }

        return {
            ...state.loginPage,
            warningModal: { type: 'succes', payload: registerContainer }
        }
    }
    else return {
        ...state.loginPage,
        warningModal: { type: 'form' }
    }
}

const isNameBusy = (registerContainer) => {
    if (localStorage.userList) {
        const usersList = JSON.parse(localStorage.userList)
        return usersList.find(({ name }) => registerContainer.name.toUpperCase() === name.toUpperCase())
    }
    else return false
}

const isEmailBusy = (registerContainer) => {
    if (localStorage.userList) {
        const usersList = JSON.parse(localStorage.userList)
        return usersList.find(({ email }) => registerContainer.email.toUpperCase() === email.toUpperCase())
    }
    else return false
}

const loginRequest = (loginName, loginPassword, state) => {
    const usersList = JSON.parse(localStorage.userList)
    const userToLogin = usersList.find(({ name, password }) =>
        name.toUpperCase() === loginName.toUpperCase() && password === loginPassword)
    console.log(userToLogin)
    if (userToLogin) {
        return {
            ...state.loginPage,
            logged: true,
            name: userToLogin.name,
            loginErr: false,
        }
    }
    else return {
        ...state.loginPage,
        logged: false,
        name: null,
        loginErr: true,
    }
}



const updateLoginPage = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': {
            const { name: loginName, password: loginPassword } = action.payload

            if (localStorage.userList) {
                return loginRequest(loginName, loginPassword, state)
            }
            else return {
                ...state.loginPage,
                loginErr: true,
            }

        }
        case 'LOG_OUT': {

            return {
                ...state.loginPage,
                loginErr: false,
                logged: false,
                name: null,
            }
        }
        case 'REGISTER_REQUEST': {
            const { name, password, email } = action.payload

            const validationContainer = []
            const registerContainer = {
                name: name.value,
                email: email.value,
                password: password.value
            }

            for (let key in action.payload) {
                let errorStatus = action.payload[key].err
                let value = action.payload[key].value
                if (!errorStatus && value) {
                    validationContainer.push(true)
                }
                else validationContainer.push(false)
            }
            let validationIsCorrect = !validationContainer.includes(false)

            return setNewUser(registerContainer, validationIsCorrect, state)

        }
        case 'WARNING_MODAL_REMOVE': {
            return {
                ...state.loginPage,
                warningModal: {},
            }
        }
        default:
            return state.loginPage
    }


}

export default updateLoginPage