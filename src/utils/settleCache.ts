enum CacheType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage',
}

class settleCache {
  private storage: Storage;

  constructor(type: CacheType = CacheType.localStorage) {
    this.storage =
      type === CacheType.localStorage ? localStorage : sessionStorage;
  }

  setCache<K, V>(key: K, value: V) {
    if (!key) return;
    const valueStr = JSON.stringify(value);
    this.storage.setItem(key.toString(), valueStr);
  }

  getCache<K, V>(key: K): V | null {
    if (!key) return null;
    const valueStr = this.storage.getItem(key.toString());
    if (valueStr) {
      return JSON.parse(valueStr) as V;
    }
    return null;
  }

  removeCache<K>(key: K) {
    if (!key) return;
    this.storage.removeItem(key.toString());
  }

  clearCache() {
    this.storage.clear();
  }

  hasCache<K>(key: K): boolean {
    if (!key) return false;
    return this.storage.getItem(key.toString()) !== null;
  }
}

const localCache = new settleCache(CacheType.localStorage);
const sessionCache = new settleCache(CacheType.sessionStorage);

export { localCache, sessionCache, CacheType, settleCache };
