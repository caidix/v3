// Storage只能存储字符，存入时将对象转为json字符串,读取时也要解析
interface CreateStorageParams {
  storage?: Storage;
  prefix?: string;
}
const defaultTime = 60 * 60 * 24 * 7 * 1000;
const defaultPrefix = 'CD_';
class StorageKey {
  storage!: Storage;
  prefix!: string;
  getKey(key: string) {
    return `${this.prefix}_${key}`.toUpperCase();
  }
}
class WebStorage extends StorageKey {
  // 过期时间默认设置为一星期
  constructor({ storage = localStorage, prefix = defaultPrefix }: CreateStorageParams) {
    super();
    this.storage = storage;
    this.prefix = prefix;
  }
  set(key: string, value: unknown, expire: number | null = defaultTime) {
    const storageString = JSON.stringify({
      value,
      expire: expire === null ? null : new Date().getTime() + expire,
    });
    this.storage.setItem(this.getKey(key), storageString);
  }
  get(key: string, failValue: unknown = null) {
    const storageString = this.storage.getItem(this.getKey(key));
    if (storageString) {
      try {
        const { value, expire } = JSON.parse(storageString);
        // 未过期 返回缓存
        if (!expire || expire >= new Date().getTime()) {
          return value;
        }
        // 走到这步 已经过期 删除缓存
        this.remove(key);
      } catch (error) {
        return storageString;
      }
    } else {
      // 自定义获取失败时的返回值
      return failValue;
    }
  }
  remove(key: string) {
    this.storage.removeItem(this.getKey(key));
  }
  // 清除所有键值
  clear() {
    this.storage.clear();
  }
}
class CookieStorage extends StorageKey {
  constructor({ prefix = defaultPrefix }: CreateStorageParams) {
    super();
    this.prefix = prefix;
  }
  /**
   * max-age
   * max-age是HTTP/1.1中,他是指我们的web中的文件被用户访问(请求)后的存活时间,是个相对的值,相对Request_time(请求时间).
   * expires使用的时间基准是文件的创建时间+expires时间，max-age使用的时间是请求的时间+expire时间，使用max-age更加准确些
   */
  set(key: string, value: unknown, maxAge: number | null = defaultTime) {
    document.cookie = this.getKey(key) + '=' + value + ';Max-Age=' + maxAge;
  }
  get(key: string) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(this.getKey(key)).replace(/[-.+*]/g, '\\$&') +
              '\\s*\\=\\s*([^;]*).*$)|^.*$',
          ),
          '$1',
        ),
      ) || null
    );
  }
  // 设置过期时间-1清除
  remove(key: string) {
    this.set(key, 1, -1);
  }
}
export function createCookie(params: CreateStorageParams) {
  return new CookieStorage(params);
}
export function createStorage(params: CreateStorageParams) {
  return new WebStorage(params);
}
