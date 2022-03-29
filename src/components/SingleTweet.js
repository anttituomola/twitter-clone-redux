import React from 'react'
import dayjs from 'dayjs'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTweet, likeTweet } from "../features/tweetSlice"

const SingleTweet = (props) => {
    const dispatch = useDispatch()
    const loginData = useSelector(state => state.login)
    const tweets = useSelector(state => state.tweets.tweets)
    console.log(tweets)
    
    const likeTweet = (id) => {
        /* tweets.map(tweet => { */
            /* if(tweet.id === id && tweet.likedBy.includes(loginData.userId)) {
                return <span>{tweet.likedBy.length}</span>
            } else { */
                return <span onClick={() => dispatch(likeTweet({
                    tweetId: props.id,
                    userId: loginData.userId
                }
                ))}>Like</span>
        }

    const tweetActions = () => {
        if (loginData.loggedIn && props.user === loginData.userName) {
            return <div className="tweetActions">
                <span>Reply</span>
                {likeTweet(props.id)}
                <span onClick={() => dispatch(deleteTweet(props.id))}>Delete</span>
            </div>
        } else {
            return <div className="tweetActions">
                <span>Reply</span>
                <span>Retweet</span>
                {likeTweet(props.id)}
            </div>
        }
    }
    return (<div className="singleTweet">
        <div className="tweetMeta">
            <span>{dayjs(props.date).format("dddd HH:mm")}</span>
            <span>{props.user}</span>
        </div>
        <div>{props.text}</div>
        {tweetActions()}
    </div>

    )
}

export default SingleTweet