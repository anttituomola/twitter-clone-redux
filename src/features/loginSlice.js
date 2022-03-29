import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: "login",

    // Initial state on pakollinen, jotta Redux saa jotain dataa sovelluksen latautuessa ensimmäistä kertaa.
    initialState: {
        loggedIn: false,
        inputValue: "",
        userName: "",
        userId: "",
    },

    /* Tässä käytetään mutatoivaa eli suoraan arvoa muuttavaa metodia (state.value += 1)
    Se on mahdollista ja sallittua ainoastaan, kun käytämme Toolkitin createSlice-metodia,
    jonka asiosta datan muuttumattomuus saavutetaan kulissien takana. */
    reducers: {
        login: (state, action) => {
            state.loggedIn = true
            state.userName = action.payload.userName
            state.userId = action.payload.userId
            state.inputValue = ""   
        },
        logout: state => {
            state.loggedIn = false
        },
        updateInputValue: (state, action) => {
            state.inputValue = action.payload
        },
    }
})

export const { login, logout, updateInputValue } = loginSlice.actions
export default loginSlice.reducer