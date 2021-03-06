import { createApp } from 'vue';
import App from './App.vue';
import './theme/index.scss';
import router from './router';
import store from './store';

import Antd from 'ant-design-vue';
import '/@/components/Loading/spin';

createApp(App).use(store).use(router).use(Antd).mount('#app');
