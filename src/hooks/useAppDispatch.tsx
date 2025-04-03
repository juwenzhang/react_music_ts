import { RootDispatchType } from '@/stores';
import { useDispatch } from 'react-redux';

const useAppDispatch: () => RootDispatchType = useDispatch;
export { type RootDispatchType, useAppDispatch };
