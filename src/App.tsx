import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    console.log(process.env);
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
