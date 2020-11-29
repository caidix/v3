<template>
  <div>123</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getListDetail } from '/@/api/playlist';
export default {
  setup() {
    const route = useRoute();
    const list = ref<Array<any>>([]);
    const playListId = ref<string | null>(null);
    const getPlayList = async () => {
      const data = await getListDetail({
        id: playListId.value,
      });
      console.log(data);
    };
    onMounted(() => {
      console.log(route.params);
      const { id } = route.params;
      if (id) {
        playListId.value = id as string;
        getPlayList();
      }
    });
    return {
      getPlayList,
    };
  },
};
</script>
