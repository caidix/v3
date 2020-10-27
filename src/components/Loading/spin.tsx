import { Spin } from 'ant-design-vue';
Spin.setDefaultIndicator({
  indicator: () => {
    return (
      <div class="page-loader">
        <div class="square"></div>
      </div>
    );
  },
});
