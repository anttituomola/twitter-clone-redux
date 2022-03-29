import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as loginActions from "../features/loginSlice"

const InputField = () => {
    const loggedIn = useSelector(state => state.login.loggedIn)
    const inputValue = useSelector(state => state.login.inputValue)
    const dispatch = useDispatch()

    const placeholder = (loggedIn) => {
        if (loggedIn) {
            return "What's happening?"
        } else {
            return "What's your name?"
        }
    }

  return (
    <div>
        <input type="text" value={inputValue} placeholder={placeholder(loggedIn)} onChange={(event) => dispatch(loginActions.updateInputValue(event.target.value))} />
    </div>
  )
}

export default InputField