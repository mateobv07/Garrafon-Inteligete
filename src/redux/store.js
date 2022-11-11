import { configureStore } from '@reduxjs/toolkit';

import authSlice from './features/userSlice';
import { waterApi } from './services/api';

export const store = configureStore({
  reducer: {
    [waterApi.reducerPath]: waterApi.reducer,
    user: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(waterApi.middleware),
});