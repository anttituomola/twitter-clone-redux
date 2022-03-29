import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as tweetActions from '../features/tweetSlice'
import * as loginActions from '../features/loginSlice'
import { v4 as uuid } from "uuid"
import dayjs from 'dayjs'

const TweetButton = () => {
    const dispatch = useDispatch()
    const loginState = useSelector(state => state.login)
    const submitTweet = () => {
      dispatch(tweetActions.addTweet({
        id: uuid(),
        text: loginState.inputValue,
        date: dayjs(),
        user: {
            id: loginState.userId,
            name: loginState.userName
        }
      }))
      dispatch(loginActions.updateInputValue(""))
    }
  return (
    <div>
        <button onClick={submitTweet}>Tweet</button>
        <p className='logout' onClick={() => dispatch(loginActions.logout())}>Log out</p>
    </div>
  )
}

export default TweetButton