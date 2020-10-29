<template>
  <div class="home">
    home
    <About />
    <Layout />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref } from 'vue';
import About from './About';
import Layout from '/@/layout/index';
import { getNewSongs } from '/@/api/discovery';
export default defineComponent({
  name: 'Home',
  components: {
    About,
    Layout,
  },
  setup() {
    const data = ref({});
    const initData = async () => {
      data.value = await getNewSongs();
      console.log(data.value);
      return {
        data,
      };
    };
    console.log(getCurrentInstance());
    onMounted(() => {
      initData();
    });
  },
});
</script>
