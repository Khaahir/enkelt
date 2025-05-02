import {configureStore} from "@reduxjs/toolkit"
import togglereducer from "./navSlice"
export const store  = configureStore({
  reducer:{
    toggle: togglereducer
  }
})