import React, { useRef, useState } from 'react'
import './Login.scss'
import { connect } from 'react-redux'
import { loginRequest, registerRequest } from '../../actions'



const LoginContainer = ({ onLogin, onRegisterSubmit }) => {
    const [regName, setRegName] = useState({
        type: 'name',
        value: '',
        err: false,
    })
    const [regEmail, setRegEmail] = useState({
        type: 'email',
        value: '',
        err: false,
    })
    const [regPass, setRegPass] = useState({
        type: 'password',
        value: '',
        err: false,
    })
    const [regConfPass, setRegConfPass] = useState({
        type: 'passwordConfirm',
        value: '',
        err: false,
    })
    const onRegisterName = (value) => {
        if (value.length >= 3 && value.length < 20) setRegName({
            value: value,
            err: false,
            type: 'name'
        })
        else setRegName({
            value: value,
            err: true,
            type: 'name'
        })
    }
    const onRegisterEmail = (value) => {
        const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (emailRegExp.test(value)) {
            setRegEmail({
                value: value,
                err: false,
                type: 'email'
            })
        }
        else setRegEmail({
            value: value,
            err: true,
            type: 'email'
        })
    }

    const onRegisterPass = (value) => {
        var passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (value.match(passRegExp)) setRegPass({
            value: value,
            err: false,
            type: 'password'
        })
        else setRegPass({
            value: value,
            err: true,
            type: 'password'
        })
        if (value === regConfPass.value) setRegConfPass({
            value: regConfPass.value,
            err: false,
            type: 'passwordConfirm'
        })
        else setRegConfPass({
            value: regConfPass.value,
            err: true,
            type: 'passwordConfirm'
        })
    }
    const onRegisterConfPass = (value) => {
        if (value === regPass.value) setRegConfPass({
            value: value,
            err: false,
            type: 'passwordConfirm',
        })
        else setRegConfPass({
            value: value,
            err: true,
            type: 'passwordConfirm',
        })
    }


    const regNameErrClass = regName.err ?
        'reg__name-err reg__name-err--active' : 'reg__name-err'

    const regEmailErrClass = regEmail.err ?
        'reg__email-err reg__email-err--active' : 'reg__email-err'

    const regPassErrClass = regPass.err ?
        'reg__password-err reg__password-err--active' : 'reg__password-err'

    const regConfPassErrClass = regConfPass.err ?
        'reg__conf-password-err reg__conf-password-err--active' : 'reg__conf-password-err'


    return <Login onLogin={onLogin}
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

const Login = ({ onLogin,
    regNameErrClass,
    onRegisterName,
    regEmailErrClass,
    onRegisterEmail,
    regPassErrClass,
    onRegisterPass,
    regConfPassErrClass,
    onRegisterConfPass,
    onRegisterSubmit,
    regName, regEmail,
    regPass, regConfPass }) => {

    const regNameInput = useRef(null)
    const regEmailInput = useRef(null)
    const regPassInput = useRef(null)
    const regConfPassInput = useRef(null)


    return <div className="login__container">
        <div className="box">
            <input
                type="checkbox"
                id="toggle"
                className="box__toggle"
                hidden />
            <img src="https://source.unsplash.com/zv3ckJKftC4/300x400" alt="by Autumn Studio" className="box__image" />

            <div className="form form--register" action="">
                <h1 className="form__title">Реєстрація</h1>

                <div className="form__helper">

                    <span className={regNameErrClass}>
                        Ім'я може містити від 3 до 19 символів
                    </span>

                    <input type="text"
                        value={regName.value}
                        onChange={() => onRegisterName(regNameInput.current.value)}
                        name="user"
                        id="new-user"
                        placeholder="User"
                        className="form__input"
                        ref={regNameInput} />
                    <label className="form__label" htmlFor="new-user">
                        Ім'я
                    </label>
                </div>

                <div className="form__helper">
                    <span className={regEmailErrClass}>
                        Не вірний формат адреси
                    </span>
                    <input
                        value={regEmail.value}
                        ref={regEmailInput}
                        onChange={() => onRegisterEmail(regEmailInput.current.value)}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form__input" />
                    <label className="form__label" htmlFor="email">Електрона скринька</label>
                </div>

                <div className="form__helper">
                    <span className={regPassErrClass}>
                        Пароль повинен містити від 6 до 20 символів, цифри, та букви латинниці різних регістрів
                    </span>
                    <input
                        value={regPass.value}
                        ref={regPassInput}
                        onChange={() => onRegisterPass(regPassInput.current.value)}
                        type="password"
                        name="password"
                        id="new-user-password"
                        placeholder="Password"
                        className="form__input" />
                    <label className="form__label" htmlFor="new-user-password">Пароль</label>
                </div>

                <div className="form__helper">
                    <span className={regConfPassErrClass}>
                        Пароль не співпадає
                    </span>
                    <input
                        value={regConfPass.value}
                        ref={regConfPassInput}
                        onChange={() => onRegisterConfPass(regConfPassInput.current.value)}
                        type="password"
                        name="password"
                        id="confirm-password"
                        placeholder="Confirm password"
                        className="form__input" />
                    <label className="form__label" htmlFor="confirm-password">Підтвердження паролю</label>
                </div>

                <button onClick={() => onRegisterSubmit(regName, regEmail, regPass, regConfPass)}
                    className="form__button">Зареєструватися</button>

                <p className="form__text">Вже зареєстровані? <label htmlFor="toggle" className="form__link">Увійти в аккаунт!</label> </p>
            </div>

            <div className="form form--login">
                <h1 className="form__title">Вхід</h1>

                <div className="form__helper">
                    <input
                        type="text"
                        name="user"
                        id="user"
                        placeholder="User"
                        className="form__input" />
                    <label className="form__label" htmlFor="user">
                        Ім'я
                    </label>
                </div>

                <div className="form__helper">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="form__input" />
                    <label className="form__label" htmlFor="password">
                        Пароль
                    </label>
                </div>

                <button onClick={() => onLogin('testNameBabak123', '123')}
                    className="form__button">
                    Увійти
                </button>

                <p className="form__text">Ще не зареєстровані? <label htmlFor="toggle" className="form__link">Пройти реєстрацію!</label> </p>
            </div>
        </div>
    </div>


}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (nick, password) => dispatch(loginRequest(nick, password)),
        onRegisterSubmit: (name, email, password, confirmPassword) => dispatch(
            registerRequest(name, email, password, confirmPassword)
        )
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer)