import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingSlice from './greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingSlice,
  },
  // Middleware to show Redux Transactions: Please remove when we push to production
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
