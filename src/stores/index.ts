import { configureStore } from '@reduxjs/toolkit';

const store: ReturnType<typeof configureStore> = configureStore({
  reducer: {},
});

type RootStoreType = ReturnType<typeof store.getState>;
type RootDispatchType = typeof store.dispatch;
export { store, type RootStoreType, type RootDispatchType };
