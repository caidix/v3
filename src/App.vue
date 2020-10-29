<template>
  <a-config-provider :locale="zhCN">
    <Layout />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
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
  },
  setup() {
    return {
      zhCN,
    };
  },
});
</script>
