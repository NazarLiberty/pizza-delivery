const updateLoginPage = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': {
            console.log('logged')
        }

        default:
            return state.loginPage
    }


}

export default updateLoginPage