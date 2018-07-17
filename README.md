<p align="center">
  Vue-admin-template
</p>

<p align="center">
	<a href="https://github.com/vuejs/vue">
		<img src="https://img.shields.io/badge/vue-2.5.2-blue.svg" alt="vue">
	</a>
	<a href="https://github.com/ElemeFE/element">
		<img src="https://img.shields.io/badge/element----ui-2.3.2-blue.svg" alt="element-ui">
	</a>
	<a href="https://github.com/BiYuqi/vue-admin-template/blob/master/LICENSE">
		<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
	</a>
</p>

> 基于vue2.x element-ui 的后台开发模板 包含侧边栏权限过滤基础模板


### 本地跑项目

``` bash
#  download
git clone https://github.com/BiYuqi/vue-admin-template.git

cd vue-admin-template
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### 本地起服务
由于easy-moc服务非常不稳定，所以本地新增node模拟接口

** server文件夹 **
* 为本地node服务，本地npm run dev后，需要在server目录 node app 来启动本地服务，以便登录正常进行
* 以下为utils/request.js文件配置
```js
// base setting
const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://easy-mock.com/mock/5aa881eb99ed355f274d0e93'
  : 'http://localhost:7085'
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
```

## DEMO
![](http://oq4hkch8e.bkt.clouddn.com/vue-admin-template.png)
![](http://oq4hkch8e.bkt.clouddn.com/admin.gif)



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
