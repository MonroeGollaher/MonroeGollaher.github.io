import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, etc. here if needed
});

export default store;
