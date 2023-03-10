import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Slices/TodoSlice";
export const store = configureStore({
    reducer: {
        todo : TodoSlice
    }
})

