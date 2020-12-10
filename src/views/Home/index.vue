<template>
  <div class="home">
    <song-sheet />
    <top-songs />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref } from 'vue';
import SongSheet from './SongSheet.vue';
import TopSongs from './TopSongs.vue';
export default defineComponent({
  name: 'Home',
  components: {
    SongSheet,
    TopSongs,
  },
  setup() {
    // const data = ref({});
    // const initData = async () => {
    //   data.value = await getNewSongs();
    //   console.log(data.value);
    //   return {
    //     data,
    //   };
    // };
    // console.log(getCurrentInstance());
    // onMounted(() => {
    //   initData();
    // });
  },
});
</script>
