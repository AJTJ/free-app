
- Another example of splitting functionality
https://github.com/kat-tax/hello-world/tree/master/src/extensions/device


```ts
SafeStorage.web.ts
import Cookies from 'js-cookie'
import { Storage } from './types'

const WebStorage: Storage = {
  get: async (key: string) => {
    return (await Cookies.get(key)) || null
  },
  set: async (key: string, value: string) => {
    Cookies.set(key, value)
  },
  remove: async (key: string) => {
    Cookies.remove(key)
  },
}

export default WebStorage

Mobile:
SafeStorage.ts
import { Storage } from './types'
import * as SecureStore from 'expo-secure-store'

const MobileStore: Storage = {
  get: async (key: string) => {
    return await SecureStore.getItemAsync(key)
  },
  set: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value)
  },
  remove: async (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

export default MobileStore
```