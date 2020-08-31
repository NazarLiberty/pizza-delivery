import React from 'react'
import './LoginModal.scss'

const LoginModal = ({ modalMessage, modalMessageClass, onModalClose }) => {
    return <div className={modalMessageClass}>
        <div className="login-modal">
            <div onClick={onModalClose}
                className="login-modal__close">
                <i className="far fa-times-circle"></i>
            </div>
            {modalMessage}
        </div>
    </div>
}

export default LoginModal