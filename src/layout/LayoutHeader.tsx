import { defineComponent, ref } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
export default defineComponent({
  name: 'DefineLayoutHeader',
  setup() {
    const selectedKeys = ref([2]);
    function handleMenuClick(num: any) {
      selectedKeys.value = [num];
    }
    return () => (
      <Layout.Header class="d-flex px-4">
        {{
          default: () => (
            <>
              <Menu
                class="layout-menu"
                theme="dark"
                mode="horizontal"
                selectedKeys={selectedKeys.value}
                style={{ lineHeight: '64px' }}
              >
                {() => (
                  <>
                    <Menu.Item key={1} onClick={handleMenuClick.bind(null, 1)}>
                      {() => 'nav 1'}
                    </Menu.Item>
                    <Menu.Item key={2} onClick={handleMenuClick.bind(null, 2)}>
                      {() => 'nav 1'}
                    </Menu.Item>
                    <Menu.Item key={3} onClick={handleMenuClick.bind(null, 3)}>
                      {() => 'nav 1'}
                    </Menu.Item>
                  </>
                )}
              </Menu>
            </>
          ),
        }}
      </Layout.Header>
    );
  },
});
