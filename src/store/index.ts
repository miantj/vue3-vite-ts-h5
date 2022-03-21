import { storageLocal } from '@/utils/storage'
import { watch } from 'vue'
import { createPinia, PiniaPluginContext } from 'pinia'

/*需要持久化的数据*/
const dataPath = {
    'pure-app': ['navTags', 'historyTags'],
    user: ['token', 'userInfo'],
    settings: ['collapse'],
}

const dataKey = 'tcs-pinia'

/**
 * @name: sww
 * @date: 2022-02-07
 * @desc: 数据持久化
 */

const piniaPersistedstate = (pinia: any) => {
    const { store } = pinia

    const pathList = dataPath[store.$id] as string[]
    // console.warn(pinia.store)
    if (pathList && pathList.length > 0) {
        const localStoreVal: any = storageLocal.getItem(store.$id)
        console.warn(localStoreVal)
        store.$subscribe(
            () => {
                console.warn(store.$id)
                storageLocal.setItem(
                    store.$id,
                    pathList.reduce((val: Record<string, any>, key: string) => {
                        val[key] = store.$state[key] as any
                        return val
                    }, {})
                )
            },
            { detached: true }
        )
        console.warn(pinia.store)
        pinia.store = {
            ...store,
            ...localStoreVal,
        }
        console.warn(pinia.store)
        return pinia
    } else {
        return pinia
    }
}

const store = createPinia()
// console.warn(store)

// const store = (app: App) => {
// store.use(piniaPersistedstate)
//     app.use(pinia)
// }

export default store
