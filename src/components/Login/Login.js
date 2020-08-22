import React from 'react'
import './Login.scss'
import { connect } from 'react-redux'
import { loginRequest } from '../../actions'

const Login = ({ onLogin }) => {
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
                    <input type="text"
                        name="user"
                        id="new-user"
                        placeholder="User"
                        className="form__input" />
                    <label className="form__label" htmlFor="new-user">
                        Ім'я
                    </label>
                </div>

                <div className="form__helper">
                    <input type="email" name="email" id="email" placeholder="Email" className="form__input" />
                    <label className="form__label" htmlFor="email">Електрона скринька</label>
                </div>

                <div className="form__helper">
                    <input type="password" name="password" id="new-user-password" placeholder="Password" className="form__input" />
                    <label className="form__label" htmlFor="new-user-password">Пароль</label>
                </div>

                <div className="form__helper">
                    <input type="password" name="password" id="confirm-password" placeholder="Confirm password" className="form__input" />
                    <label className="form__label" htmlFor="confirm-password">Підтвердження паролю</label>
                </div>

                <button className="form__button">Зареєструватися</button>

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
        onLogin: (nick, password) => dispatch(loginRequest(nick, password))
    }
}

export default connect(null, mapDispatchToProps)(Login)