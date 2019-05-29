
export default {
    treeShaking: true,
    routes: [{
        path: '/',
        component: '../layouts/BasicLayout.js',
        routes: [
            {
                path: '/',
                component: 'User/index'
            }
        ]
    }],
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: 'my-admin',
            dll: false,
        }],
    ],
}
