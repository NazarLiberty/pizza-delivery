import React, { useState } from 'react'
import Login from './Login'
import './Login.scss'
import { connect } from 'react-redux'
import { loginRequest, registerRequest } from '../../actions'



const LoginContainer = ({ onLogin, onRegisterSubmit, loginErr }) => {

    const [regName, setRegName] = useState({
        value: '',
        err: false,
    })
    const [regEmail, setRegEmail] = useState({
        value: '',
        err: false,
    })
    const [regPass, setRegPass] = useState({
        value: '',
        err: false,
    })
    const [regConfPass, setRegConfPass] = useState({
        value: '',
        err: false,
    })
    const onRegisterName = (value) => {
        if (value.length >= 3 && value.length < 14) setRegName({
            value: value,
            err: false,
        })
        else setRegName({
            value: value,
            err: true,
        })
    }
    const onRegisterEmail = (value) => {
        const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (emailRegExp.test(value)) {
            setRegEmail({
                value: value,
                err: false,
            })
        }
        else setRegEmail({
            value: value,
            err: true,
        })
    }

    const onRegisterPass = (value) => {
        var passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (value.match(passRegExp)) setRegPass({
            value: value,
            err: false,
        })
        else setRegPass({
            value: value,
            err: true,
        })
        if (value === regConfPass.value) setRegConfPass({
            value: regConfPass.value,
            err: false,
        })
        else setRegConfPass({
            value: regConfPass.value,
            err: true,
        })
    }
    const onRegisterConfPass = (value) => {
        if (value === regPass.value) setRegConfPass({
            value: value,
            err: false,
        })
        else setRegConfPass({
            value: value,
            err: true,
        })
    }

    const logErrClass = loginErr ?
        'log__err log__err--active' : 'log__err'

    const regNameErrClass = regName.err ?
        'reg__name-err reg__name-err--active' : 'reg__name-err'

    const regEmailErrClass = regEmail.err ?
        'reg__email-err reg__email-err--active' : 'reg__email-err'

    const regPassErrClass = regPass.err ?
        'reg__password-err reg__password-err--active' : 'reg__password-err'

    const regConfPassErrClass = regConfPass.err ?
        'reg__conf-password-err reg__conf-password-err--active' : 'reg__conf-password-err'


    return <Login onLogin={onLogin}
        logErrClass={logErrClass}
        onRegisterName={onRegisterName}
        regNameErrClass={regNameErrClass}
        regEmailErrClass={regEmailErrClass}
        onRegisterEmail={onRegisterEmail}
        regPassErrClass={regPassErrClass}
        onRegisterPass={onRegisterPass}
        regConfPassErrClass={regConfPassErrClass}
        onRegisterConfPass={onRegisterConfPass}
        onRegisterSubmit={onRegisterSubmit}
        regName={regName}
        regEmail={regEmail}
        regPass={regPass}
        regConfPass={regConfPass} />
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (name, password) => dispatch(loginRequest(name, password)),
        onRegisterSubmit: (name, email, password, confirmPassword) => dispatch(
            registerRequest(name, email, password, confirmPassword)
        )
    }
}

const mapStateToProps = ({ loginPage: { loginErr } }) => {
    return {
        loginErr
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)