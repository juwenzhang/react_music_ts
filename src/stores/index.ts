import { configureStore } from '@reduxjs/toolkit';
import recommendReducer from '@/views/discover/pages/recommend/store/recommend-store';

const store: ReturnType<typeof configureStore> = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
});

type RootStoreType = ReturnType<typeof store.getState>;
type RootDispatchType = typeof store.dispatch;
export { store, type RootStoreType, type RootDispatchType };
