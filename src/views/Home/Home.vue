<template>
  <div class="home">
    home
    <About />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import About from '../About';
import { getNewSongs } from '/@/api/discovery';
export default defineComponent({
  name: 'Home',
  components: {
    About,
  },
  setup() {
    const initData = async () => {
      const data = await getNewSongs();
      console.log(data);
      return {
        data,
      };
    };
    onMounted(() => {
      initData();
    });
  },
});
</script>
