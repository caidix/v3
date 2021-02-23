<template>
  <form-block>
    <template #title>
      <h2>歌单推荐</h2>
    </template>
    <template #header>
      <ul class="center-tab-list mb-3">
        <li
          v-for="(cat, index) in categoryRef"
          :key="index"
          :class="{ 'active-index': activeIndexRef === index }"
          @click="getSheetByCategory(index)"
        >
          {{ cat.name || cat.displayName }}
        </li>
      </ul>
    </template>
    <a-spin :spinning="loadingRef">
      <div class="playlist">
        <div class="playlist-item_box" v-for="(item, index) in sheetRef" :key="index">
          <div class="playlist-item__imgwarp" @click="routeTo(item.id)">
            <img class="playlist-item__img" :src="genImgUrl(item.coverImgUrl, 300)" alt="" />
            <div class="desc-wrap" v-if="item.description">
              <span class="desc">{{ filterDescription(item.description) }}</span>
            </div>
            <PlayCircleOutlined :style="{ fontSize: '32px' }" class="playlist-item__icon" />
          </div>
          <div class="playlist-item__content">
            <div class="playlist-item__name" @click="routeTo(item.id)">{{ item.name }}</div>
            <div class="playlist-item__count mt-2">
              播放量:{{ filterPlayCount(item.playCount) }}
            </div>
          </div>
        </div>
      </div>
    </a-spin>
  </form-block>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { PlayCircleOutlined } from '@ant-design/icons-vue';
import { LoadingHook } from '/@/hooks/useLoading';
import FormBlock from '../FormBlock.vue';
import { getPlaylists, getHotPlayListCategory } from '/@/api/playlist';
import { useRouter } from 'vue-router';
import { genImgUrl, filterPlayCount } from '/@/utils/common';
export default {
  components: {
    FormBlock,
    PlayCircleOutlined,
  },
  setup() {
    const sheetRef = ref(null);
    const categoryRef = ref<Array<any>>([]);
    const activeIndexRef = ref<Number>(0);
    const { loadingRef, loading, loaded } = LoadingHook();
    const router = useRouter();

    // filters
    function filterDescription(val: string): string {
      if (val.length < 20) {
        return val;
      }
      return val.slice(0, 20) + '......';
    }

    // fuctions
    const getSongSheet = async (cat = ''): Promise<void> => {
      loading();
      const { playlists }: any = await getPlaylists({ limit: 10, cat });
      sheetRef.value = playlists || [];
      loaded();
    };
    const getSongCategory = async (): Promise<void> => {
      const { tags }: any = await getHotPlayListCategory();
      if (tags && tags.length > 5) {
        tags.length = 5;
      }
      categoryRef.value = [{ name: '', displayName: '为你推荐' }, ...tags] || [];
    };
    const getSheetByCategory = (index: number) => {
      activeIndexRef.value = index;
      const { name } = categoryRef.value[index];
      getSongSheet(name);
    };
    const routeTo = (id: number) => {
      router.push(`/playlists/${id}`);
    };
    onMounted(() => {
      getSongSheet();
      getSongCategory();
    });
    return {
      sheetRef,
      categoryRef,
      activeIndexRef,
      loadingRef,
      genImgUrl,
      filterDescription,
      filterPlayCount,
      getSheetByCategory,
      routeTo,
    };
  },
};
</script>
<style lang="scss" scoped>
.playlist-item__count {
  height: 22px;
  overflow: hidden;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
