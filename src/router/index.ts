import { Router, createRouter, createWebHashHistory, useRouter } from 'vue-router'

import routes from './modules'

// 创建路由实例
export const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            if (savedPosition) {
                return savedPosition
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number = document.documentElement.scrollTop || document.body.scrollTop
                    resolve({ left: 0, top })
                }
            }
        })
    },
})

// 全局前置守卫
router.beforeEach((to, from) => {
    // console.warn('beforeEach', to)
   
})

// 全局解析守卫
router.beforeResolve(async to => {
    // console.warn('beforeResolve', to)
})

// 全局后置钩子
router.afterEach((to, from, failure) => {
    // console.warn('afterEach', to, from)
})

export default router
