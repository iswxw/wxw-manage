# wxw-manage

  [![后台项目](http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/badge/%E5%90%8E%E5%8F%B0%E9%A1%B9%E7%9B%AE-mall-blue.svg)](https://github.com/macrozheng/mall)  [![码云](http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/badge/%E7%A0%81%E4%BA%91-%E9%A1%B9%E7%9B%AE%E5%9C%B0%E5%9D%80-orange.svg)](https://gitee.com/macrozheng/mall-admin-web)



## 前言

该项目为前后端分离项目的前端部分，后端项目`wxw-blog`地址：[传送门](https://github.com/GitHubWxw/wxw-blog) 

## 项目介绍

` wxw-manage` 是一个综合后台管理系统的前端项目，基于Vue+Element实现。主要包括实际学习过程中积累的功能。

## 项目演示

项目在线演示地址：<http://www.macrozheng.com/admin/>  



## 技术选型

| 技术              | 说明                  | 官网                                              |
| ----------------- | --------------------- | ------------------------------------------------- |
| Vue               | 前端框架              | <https://vuejs.org/>                              |
| Vue-router        | 路由框架              | <https://router.vuejs.org/>                       |
| Vuex              | 全局状态管理框架      | <https://vuex.vuejs.org/>                         |
| Element           | 前端UI框架            | <https://element.eleme.io/>                       |
| Axios             | 前端HTTP框架          | <https://github.com/axios/axios>                  |
| v-charts          | 基于Echarts的图表框架 | <https://v-charts.js.org/>                        |
| Js-cookie         | cookie管理工具        | <https://github.com/js-cookie/js-cookie>          |
| nprogress         | 进度条控件            | <https://github.com/rstacruz/nprogress>           |
| vue-element-admin | 项目脚手架参考        | <https://github.com/PanJiaChen/vue-element-admin> |

## 项目布局

```vue
src -- 源码目录
├── api -- axios网络请求定义
├── assets -- 静态图片资源文件
├── components -- 通用组件封装
├── icons -- svg矢量图片文件
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── styles -- 全局css样式
├── utils -- 工具类
└── views -- 前端页面
    ├── home -- 首页
    ├── layout -- 通用页面加载框架
    ├── login -- 登录页
    ├── oms -- 订单模块页面
    ├── pms -- 商品模块页面
    └── sms -- 营销模块页面
```

## 搭建步骤

- 下载node并安装：<https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi>;
- 该项目为前后端分离项目，访问本地访问接口需搭建后台环境，搭建请参考后端项目[传送门](https://github.com/macrozheng/mall);
- 访问在线接口无需搭建后台环境，只需将`config/dev.env.js`文件中的`BASE_API`改为[http://admin-api.macrozheng.com](http://admin-api.macrozheng.com/)即可;
- 如果你对接的是[mall-swarm](https://github.com/macrozheng/mall-swarm)微服务后台的话，所有接口都需要通过网关访问，需要将`config/dev.env.js`文件中的`BASE_API`改为<http://localhost:8201/mall-admin>；
- 克隆源代码到本地，使用IDEA打开，并完成编译;
- 在IDEA命令行中运行命令：npm install,下载相关依赖;
- 在IDEA命令行中运行命令：npm run dev,运行项目;
- 访问地址：[http://localhost:8090](http://localhost:8090/) 即可打开后台管理系统页面;
- 具体部署过程请参考：[mall前端项目的安装与部署](http://www.macrozheng.com/#/deploy/mall_deploy_web)
- `注意`：如果遇到无法运行npm命令，需要配置npm的环境变量，如在path变量中添加：C:\Users\zhenghong\AppData\Roaming\npm;
- `注意`：如果遇到npm install无法成功下载依赖，请参考[使用Jenkins一键打包部署前端应用，就是这么6！](http://www.macrozheng.com/#/reference/jenkins_vue) 中`遇到的坑`部分。

## 项目预览

```
git clone https://github.com/GitHubWxw/wxw-manage.git      // 把模板下载到本地
cd  wxw-manage    // 进入模板目录
npm install       // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器，浏览器访问 http://localhost:8080
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```

## 插件概述

**vue-schart** 

vue.js 封装 sChart.js 的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)

<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart class="wrapper" canvasId="myCanvas" :options="options"></schart>
    </div>
</template>

<script>
    import Schart from 'vue-schart'; // 导入Schart组件
    export default {
        data() {
            return {
                options: {
                    type: 'bar',
                    title: {
                        text: '最近一周各品类销售图'
                    },
                    labels: ['周一', '周二', '周三', '周四', '周五'],
                    datasets: [
                        {
                            label: '家电',
                            data: [234, 278, 270, 190, 230]
                        },
                        {
                            label: '百货',
                            data: [164, 178, 190, 135, 160]
                        },
                        {
                            label: '食品',
                            data: [144, 198, 150, 235, 120]
                        }
                    ]
                }
            };
        },
        components: {
            Schart
        }
    };
</script>
<style>
    .wrapper {
        width: 7rem;
        height: 5rem;
    }
</style>
```

## 注意事项

### 一、组件过滤

举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分四步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

```JavaScript
{
    // 富文本编辑器组件
    path: '/editor',
    component: resolve => require(['../components/page/VueEditor.vue'], resolve)
},
```

第二步：删除引入该组件的文件。在目录 src/components/page/ 删除 VueEditor.vue 文件。

第三步：删除该页面的入口。在目录 src/components/common/Sidebar.vue 中，找到该入口，删除下面这段代码。

```js
{
	index: 'editor',
	title: '富文本编辑器'
},
```

第四步：卸载该组件。执行以下命令：
npm un vue-quill-editor -S

完成。

### 二、切换主题

第一步：打开 src/main.js 文件，找到引入 element 样式的地方，换成浅绿色主题。

```javascript
import 'element-ui/lib/theme-default/index.css'; // 默认主题
// import './assets/css/theme-green/index.css';       // 浅绿色主题
```

第二步：打开 src/App.vue 文件，找到 style 标签引入样式的地方，切换成浅绿色主题。

```javascript
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";     /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   !*浅绿色主题*!*/
```

第三步：打开 src/components/common/Sidebar.vue 文件，找到 el-menu 标签，把 background-color/text-color/active-text-color 属性去掉即可。

(1) vue+markdown编辑器mavonEditor

- [mavonEditor使用教程](https://blog.csdn.net/sayoko06/article/details/90675535)  

(2) vue-schart基于Vue的echart图表

- [vue-schart图表使用教程](https://www.cnblogs.com/chenguiya/p/9267359.html)

(3) vue-quill-editor基于Vue的富文本编辑器

- [vue-quill-editor富文本编辑器使用教程](https://www.jianshu.com/p/33c8a0fea63d)

(4) vuedraggable实现VUE中组件拖拽

- [vuedraggable实现VUE中组件拖拽](https://www.jianshu.com/p/e8ff1e1cafb1)

(5) vue-cropperjs实现图片裁剪功能

- [官方文档](http://npm.taobao.org/package/vue-cropperjs)
- [实例效果](https://agontuk.github.io/vue-cropperjs/)
- [使用教程](https://www.jianshu.com/p/85a52da879bb)
- 方案：vue如何实现裁剪/截图功能的两种方式（ 1. vue-cropper 2. cropper.js ）

(6) axios基于 promise 的 HTTP库

- [基于 promise 的 HTTP库使用教程](https://www.jianshu.com/p/d771bbc61dab)

(7) Babel-polyfill 的作用

- [Babel-polyfill 的作用说明](https://www.jianshu.com/p/67dedc89b13d)

(8) json-server基于Vue的mock数据工具

- [Json使用教程](https://www.jianshu.com/p/bdbbd3314cf3)