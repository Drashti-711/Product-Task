import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./reducer/products.slice";
import { localStorageMiddleware } from "../utility/localStorage";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer
    },
    middleware: gdm =>
    gdm().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch