import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage as the storage engine
import CommonSlice from "./modules/common";

// Define a persist config
const persistConfig = {
  key: "root",
  storage,
  // Other configuration options if needed
};

const persistedReducer = persistReducer(persistConfig, CommonSlice);

export const store = configureStore({
  reducer: {
    common: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
