import React from 'react'
import Header from '../Header/Header'
import Login from '../Login/LoginContainer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const LoginPage = ({ logged }) => {

    if (logged) return <Redirect to="/" />

    return (
        <>
            <Header simpleHeader />
            <Login />
        </>
    )
}

const mapStateToProps = ({ loginPage: { logged } }) => {
    return {
        logged
    }
}

export default connect(mapStateToProps)(LoginPage)