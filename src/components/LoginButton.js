import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as loginActions from "../features/loginSlice"
import { v4 as uuid } from "uuid"


const LoginButton = () => {
    const loggedIn = useSelector(state => state.login.loggedIn)
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.login.inputValue)

    const button = (loggedIn) => {
        if (loggedIn) {
            return <button onClick={() => dispatch(loginActions.logout())}>Log out</button>
        } else {
            return <button 
                onClick={() => dispatch(loginActions.login({
                userName: inputValue,
                userId: uuid()
            }))}>Login</button>
        }
    }

    return (
        <div>
            {button(loggedIn)}
        </div>
    )
}

export default LoginButton