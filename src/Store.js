import { configureStore } from "@reduxjs/toolkit"

// Luomme tämän myöhemmin
import tweetSlice from "./features/tweetSlice"
import loginSlice from "./features/loginSlice"

export default configureStore(  {
    reducer: {
        tweets: tweetSlice,
        login: loginSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        // Got annoying warnings from my date objects, turn them off with this:
        serializableCheck: false,
      },
    ),
})
