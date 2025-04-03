import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStoreType } from '@/stores';

const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector;
export { useAppSelector, type TypedUseSelectorHook, type RootStoreType };
