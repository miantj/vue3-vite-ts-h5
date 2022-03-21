/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = ''
let baseImgPath

switch (import.meta.env.MODE) {
    case 'development': //测试环境
        baseUrl = 'http://sa.gzsa.net:38443/osp-applet'
        break
    case 'production': //生产环境
        baseUrl = ''
        break
}

export { baseUrl }
