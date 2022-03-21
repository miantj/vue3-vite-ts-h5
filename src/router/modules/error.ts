

const errorRouter = {
    path: '/error/403',
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: {
        icon: 'homeFilled',
        title: '403',
    },
}

export default errorRouter
