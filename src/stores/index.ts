import { configureStore, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import recommendReducer from '@/views/discover/pages/recommend/store/recommend-store';

const store: ReturnType<typeof configureStore> = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
  // todo: config our middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

type RootStoreType = ReturnType<typeof store.getState>;
type RootDispatchType = ThunkDispatch<RootStoreType, unknown, UnknownAction>;
export { store, type RootStoreType, type RootDispatchType };
