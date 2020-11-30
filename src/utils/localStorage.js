// simple wrapper for localStorage with in-memory fallback for Safari private tab
// or disabled cookies (which disabled localStorage as well in modern browsers)
const data = {}

function isLocalStorageSupported() {
  try {
    window.localStorage.setItem('__test__', '1')
    window.localStorage.removeItem('__test__')
    return true
  } catch (error) {
    return false
  }
}

const fallbackStorage = {
  getItem: (key) => data[key],
  setItem: (key, val) => {
    data[key] = val
  },
  removeItem: (key) => delete data[key],
}

export default isLocalStorageSupported()
  ? {
      getItem: (key) => window.localStorage.getItem(key),
      setItem: (key, val) => {
        try {
          window.localStorage.setItem(key, val)
        } catch (e) {
          // catch QUOTA_EXCEEDED_ERR
        }
      },
      removeItem: (key) => window.localStorage.removeItem(key),
    }
  : fallbackStorage
