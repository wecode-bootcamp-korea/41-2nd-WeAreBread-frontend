import { modalSlice } from './modules/modal';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reviewSlice } from './modules/review';

const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  review: reviewSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
