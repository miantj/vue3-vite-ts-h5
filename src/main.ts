import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useVant } from '@/config/vant'

// 导入公共样式
import './style/index.scss'
const app = createApp(App)

app.use(router)
app.use(store)
useVant(app)
app.mount('#app')
