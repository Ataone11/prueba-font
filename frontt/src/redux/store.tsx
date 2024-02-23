import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slice"
import userReducer from "./slice"

//Store de redux
export const store = configureStore({
  reducer: {
    user:userReducer
  },
})
