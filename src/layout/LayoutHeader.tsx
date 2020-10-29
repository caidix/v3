import { defineComponent, ref } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
export default defineComponent({
  name: 'DefineLayoutHeader',
  setup() {
    const selectedKeys = ref('2');
    return () => (
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        {{
          default: () => (
            <Menu
              theme="dark"
              mode="horizontal"
              onSelectedKeys={selectedKeys}
              style={{ lineHeight: '64px' }}
            >
              {() => (
                <>
                  <Menu.Item key="1">{() => 'nav 1'}</Menu.Item>
                  <Menu.Item key="2">{() => 'nav 1'}</Menu.Item>
                  <Menu.Item key="3">{() => 'nav 1'}</Menu.Item>
                </>
              )}
            </Menu>
          ),
        }}
      </Layout.Header>
    );
  },
});
