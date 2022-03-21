import { defineStore } from 'pinia'
import store from '@/store'
import routes from '@/router/modules'

export const usePermissionStore = defineStore({
    id: 'pure-permission',
    state: () => ({
        // 静态路由生成的菜单
        constantMenus: routes,
    }),
    getters: {},
    actions: {},
})

export function usePermissionStoreHook() {
    return usePermissionStore(store)
}
