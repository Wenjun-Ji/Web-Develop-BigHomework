import { createApp } from 'vue';
import './style.less';
import './style2.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

// 创建 Pinia 实例
const pinia = createPinia();
pinia.use(piniaPluginPersist);

// 创建 Vue 应用
const app = createApp(App);

// 使用路由和插件
app.use(router);
app.use(ElementPlus);
app.use(pinia);

// 挂载应用
app.mount('#app');