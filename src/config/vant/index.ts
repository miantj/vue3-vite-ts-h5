import { App, Component } from 'vue'
import { Button, Grid, GridItem, Icon, NavBar } from 'vant'

// 全局注册组件
const components = [Button, Grid, GridItem, Icon, NavBar]

export function useVant(app: App) {
    components.forEach((component: Component) => {
        if (component.name) app.component(component.name, component)
    })
}
