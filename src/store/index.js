import { configureStore } from "@reduxjs/toolkit";

import cart from "./cartOperation";

const store = configureStore({
    reducer:{cartItem:cart}
})

export default store