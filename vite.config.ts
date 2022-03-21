import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// 路径查找
const pathResolve = (dir: string): string => {
    return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        // svg组件化支持
        svgLoader(),
        // ElementPlus按需引入
        styleImport({
            resolves: [VantResolve()],
        }),
    ],
    resolve: {
        // 设置别名
        alias: [{ find: '@', replacement: pathResolve('./src') }],
    },
    server: {
        open: true,
        // 跨越请求
        // proxy: {
        //     '/api': {
        //         target: 'https://www.qqlykm.cn/api/biying/', // 后台接口
        //         changeOrigin: true,
        //         secure: false, // 如果是https接口，需要配置这个参数
        //         rewrite: path => path.replace(/^\/api/, ''),
        //     },
        // },
    },
})
