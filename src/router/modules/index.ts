import { RouteRecordRaw, RouteComponent } from 'vue-router'

// 静态路由
const filtersFiles = import.meta.globEager('./*.ts')
const routes: Array<RouteRecordRaw> = []

for (const key in filtersFiles) {
    if (filtersFiles[key].default instanceof Array) {
        routes.push(...filtersFiles[key].default)
    } else {
        routes.push(filtersFiles[key].default)
    }
}
export default routes
