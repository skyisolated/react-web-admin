import { configureStore } from "@reduxjs/toolkit";
import TabReducer from "@/store/reducers/tab";
export default configureStore({
  reducer: {
    tab: TabReducer,
  },
});