import { createSlice } from "@reduxjs/toolkit"

export const tweetSlice = createSlice({
    name: "tweets",

    // Initial state on pakollinen, jotta Redux saa jotain dataa sovelluksen latautuessa ensimmäistä kertaa.
    initialState: {
        tweets: [],
        hashtags: [],
        inputValue: "",
    },

    /* Tässä käytetään mutatoivaa eli suoraan arvoa muuttavaa metodia (state.value += 1)
    Se on mahdollista ja sallittua ainoastaan, kun käytämme Toolkitin createSlice-metodia,
    jonka asiosta datan muuttumattomuus saavutetaan kulissien takana. */
    reducers: {
        updateInputValue: (state, action) => {
            state.inputValue = action.payload
        },
        addTweet: (state, action) => {
            state.tweets = [
                ...state.tweets, 
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    date: action.payload.date,
                    likedBy: [],
                    user: {
                        id: action.payload.user.id,
                        name: action.payload.user.name,
                    } 
                }
            ]
        },
        deleteTweet: (state, action) => {
            state.tweets = state.tweets.filter(tweet => tweet.id !== action.payload)
        },
        likeTweet: (state, action) => {
            const tweet = state.tweets.find(tweet => tweet.id === action.payload.tweetId)
            tweet.likedBy.push(action.payload.usedId)
        }
      
    }
})

export const { addTweet, deleteTweet, updateInputValue, likeTweet } = tweetSlice.actions
export default tweetSlice.reducer