import React from 'react'
import { connect } from 'react-redux'
import LoginModal from './LoginModal'
import { warningModalRemove } from '../../actions'

const LoginModalContainer = ({ warningModal, onModalClose }) => {


    let modalMessage = '';
    if (warningModal.type === 'email') modalMessage = "Вибачте, але ця електронна адреса вже зареєстрована у нашій системі"
    if (warningModal.type === 'name') modalMessage = "Вибачте, але це ім'я вже зареєстроване у нашій системі"
    if (warningModal.type === 'form') modalMessage = "Заповніть всі поля форми корректно, будьласка"
    if (warningModal.type === 'succes') {
        const { name, email } = warningModal.payload
        modalMessage = (
            <span>
                Вітаємо! Аккаунт з іменем
                <span style={{ color: "#fe1e1e" }}> {name} </span>
            був зареєстрований. Провірте вашу скриньку
                <span style={{ color: "#fe1e1e" }}> {email} </span>
             для підтвердження реєстрації!
            </span>
        )
    }
    const modalMessageClass = warningModal.type ?
        'login-modal__container login-modal__container--active' : 'login-modal__container'


    return <LoginModal
        onModalClose={onModalClose}
        modalMessage={modalMessage}
        modalMessageClass={modalMessageClass} />
}

const mapStateToProps = ({ loginPage: { warningModal } }) => {
    return {
        warningModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onModalClose: () => dispatch(warningModalRemove())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
