import Header from '/@/layout/LayoutHeader';
import { Layout } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DefineLayout',
  components: {
    Header,
  },
  setup() {
    return () => <Layout>{() => <Header />}</Layout>;
  },
});
