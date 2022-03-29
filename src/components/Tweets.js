import React from 'react'
import { useSelector } from 'react-redux'
import SingleTweet from './SingleTweet'


const Tweets = () => {
    const tweets = useSelector(state => state.tweets.tweets)
    const user = useSelector(state => state.login.userId)
    console.log(tweets)
  return (
    <div>
        {tweets.map(tweet => {
            return <SingleTweet 
                key={tweet.id} 
                id={tweet.id} 
                text={tweet.text}
                date={tweet.date}
                user={tweet.user.name}    
            />
        })}
    </div>
  )
}

export default Tweets