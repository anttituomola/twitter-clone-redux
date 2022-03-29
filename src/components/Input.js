import React from 'react'
import LoginButton from './LoginButton'
import { useSelector } from 'react-redux'
import InputField from './InputField'
import TweetButton from './TweetButton'


const Input = () => {
    const loggedIn = useSelector(state => state.login.loggedIn)
    const button = () => {
        if(!loggedIn) {
            return <LoginButton />
        } else {
            return <TweetButton />
        }
    } 

  return (
    <div>
        <InputField />
        {button()}
    </div>
  )
}

export default Input