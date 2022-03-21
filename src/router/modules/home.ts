const AppMain = () => import('@/views/app-main.vue')

/****************************************   router参数扩展   ***************************************
 *
 *  @Icon   {srting}                 展示icon
 *  @hiddenChildren {Boolean}        是否展示Children子页面
 *  @hidden {Boolean}                是否展示当前页面，优先级大于hiddenChildren
 *  @noCache {Boolean}               是否缓存当前页面，默认 false 开启缓存
 *  @activeMenu {srting||Array}      左侧菜单选中状态
 *  @activeHeadMenu {srting}         头部head选中状态
 *
 ***********************************************************************************************/

const homeRouter = [
    {
        path: '/',
        name: 'index',
        component: AppMain,
        redirect: '/home',
        meta: {
            icon: 'homeFilled',
            title: '首页',
            hiddenChildren: true,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home.vue'),
                meta: {
                    title: '首页',
                },
            },
        ],
    },
]

export default homeRouter
