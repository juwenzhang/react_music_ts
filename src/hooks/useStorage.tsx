import { useState } from 'react';
import { CacheType, settleCache } from '@/utils';

const useStorage = <T, K, R>(
  key: T,
  initialValue: K,
  storage: CacheType = CacheType.localStorage,
) => {
  const CacheTool: InstanceType<typeof settleCache> = new settleCache(storage);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = CacheTool.getCache<T, R>(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: K) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      CacheTool.setCache<T, K>(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useStorage;
