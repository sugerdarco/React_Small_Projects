import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for web

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["todos"]
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
