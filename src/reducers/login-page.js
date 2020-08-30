const setNewUser = (registerContainer, validationIsCorrect) => {
    if (isNameBusy(registerContainer)) return alert('NAME IS BUSIED SUKA')
    if (isEmailBusy(registerContainer)) return alert('EMAIL IS BUSIED NAH')
    if (validationIsCorrect) {
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

        return alert(`Welcome to the party, ${registerContainer.name}!
confirm mail was sent to your box ${registerContainer.email} !
`)
    }
    else return alert('Enter all fields correctly please nah')
}

const isNameBusy = (registerContainer) => {
    const usersList = JSON.parse(localStorage.userList)
    return usersList.find(({ name }) => registerContainer.name === name)
}

const isEmailBusy = (registerContainer) => {
    const usersList = JSON.parse(localStorage.userList)
    return usersList.find(({ email }) => registerContainer.email === email)
}



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

            setNewUser(registerContainer, validationIsCorrect)
            return state.loginPage
        }
        default:
            return state.loginPage
    }


}

export default updateLoginPage