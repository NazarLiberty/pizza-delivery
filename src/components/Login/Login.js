import React, { useRef } from 'react'
import './Login.scss'
import LoginModal from '../LoginModal/LoginModalContainer'


const Login = ({ onLogin,
    logErrClass,
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

    const logName = useRef(null)
    const logPass = useRef(null)

    return <div className="login__container">
        <LoginModal />
        <div className="box">
            <input
                type="checkbox"
                id="toggle"
                className="box__toggle"
                hidden />
            <img src="https://source.unsplash.com/zv3ckJKftC4/300x400"
                alt="by Autumn Studio"
                className="box__image" />

            <div className="form form--register" action="">
                <h1 className="form__title">Реєстрація</h1>

                <div className="form__helper">

                    <span className={regNameErrClass}>
                        Ім'я може містити від 3 до 13 символів
                    </span>

                    <input type="text"
                        value={regName.value}
                        onChange={(e) => onRegisterName(e.target.value)}
                        name="user"
                        id="new-user"
                        placeholder="User"
                        className="form__input"
                    />
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
                        onChange={(e) => onRegisterEmail(e.target.value)}
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
                        onChange={(e) => onRegisterPass(e.target.value)}
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
                        onChange={(e) => onRegisterConfPass(e.target.value)}
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
                        ref={logName}
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
                    <span className={logErrClass}>
                        Ім'я або пароль не правильнi
                    </span>
                    <input
                        ref={logPass}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="form__input" />
                    <label className="form__label" htmlFor="password">
                        Пароль
                    </label>
                </div>

                <button onClick={() =>
                    onLogin(logName.current.value,
                        logPass.current.value)}
                    className="form__button">
                    Увійти
                </button>

                <p className="form__text">Ще не зареєстровані? <label htmlFor="toggle" className="form__link">Пройти реєстрацію!</label> </p>
            </div>
        </div>
    </div>


}


export default Login