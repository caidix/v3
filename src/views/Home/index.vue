<template>
  <div class="home">
    <song-sheet />
    <top-songs />
    <banner />
    <new-mvs />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref } from 'vue';
import SongSheet from './SongSheet/SongSheet.vue';
import TopSongs from './TopSongs/TopSongs.vue';
import Banner from './Banner/Banner.vue';
import NewMvs from './NewMvs/NewMvs.vue';
export default defineComponent({
  name: 'Home',
  components: {
    SongSheet,
    TopSongs,
    Banner,
    NewMvs,
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
