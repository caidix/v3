<template>
  <ConfigProvider :locale="zhCN">
    <Layout />
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import Layout from '/@/layout/index';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'ant-design-vue/dist/antd.css';
moment.locale('zh-cn');
export default defineComponent({
  name: 'App',
  components: {
    Layout,
    ConfigProvider,
  },
  setup() {
    return {
      zhCN,
    };
  },
});
</script>
