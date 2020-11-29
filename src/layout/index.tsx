import Header from '/@/layout/LayoutHeader';
import { Layout } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
export default defineComponent({
  name: 'DefineLayout',
  components: {
    Header,
  },
  setup() {
    return () => (
      <Layout>
        {() => (
          <>
            <Header />
            <div class="layout-body">
              <RouterView />
            </div>
          </>
        )}
      </Layout>
    );
  },
});
