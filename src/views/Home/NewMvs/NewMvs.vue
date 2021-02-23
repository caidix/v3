<template>
  <form-block>
    <template #title>
      <h2>M V</h2>
    </template>
    <template #header>
      <ul class="center-tab-list mb-3">
        <li
          v-for="({ key, value }, index) in mvAreaTabs"
          :key="index"
          :class="{ 'active-index': activeIndexRef === index }"
          @click="getMvs(index, key)"
        >
          {{ value }}
        </li>
      </ul>
    </template>
    <a-spin :spinning="loadingRef">
      <div class="playlist">
        <div class="playlist-item_box" v-for="(item, index) in mvsRef" :key="index">
          <div class="playlist-item__imgwarp" @click="routeToMv(item.id)">
            <img class="playlist-item__img" :src="genImgUrl(item.cover, 500, 260)" alt="" />
            <PlayCircleOutlined :style="{ fontSize: '32px' }" class="playlist-item__icon" />
          </div>
          <div class="playlist-item__content">
            <div class="playlist-item__name" @click="routeToMv(item.id)">{{ item.name }}</div>
            <singer :singers="item.artists" class="gary mt-2" />
            <div class="playlist-item__count mt-2 gary">
              <VideoCameraOutlined />
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
import { mvAreaTabs } from '/@/utils/enums';
import FormBlock from '../FormBlock.vue';
import { genImgUrl, filterPlayCount } from '/@/utils/common';
import { getNewMvs, MvsProps } from '/@/api/mv';
import { LoadingHook } from '/@/hooks/useLoading';
import { useRouter } from '/@/hooks/useRouter';
import { PlayCircleOutlined, VideoCameraOutlined } from '@ant-design/icons-vue';
import Singer from '../Singer';
export default {
  components: {
    FormBlock,
    Singer,
    PlayCircleOutlined,
    VideoCameraOutlined,
  },
  setup() {
    const activeIndexRef = ref<Number>(0);
    const mvsRef = ref<Nullable<Array<any>>>(null);
    const { loadingRef, loading, loaded } = LoadingHook();
    const { routeTo } = useRouter();

    async function getMvs(index = 0, key = '') {
      loading();
      activeIndexRef.value = index;
      const params: MvsProps = {
        limit: 10,
        area: key,
      };
      const { data } = await getNewMvs(params);
      if (Array.isArray(data)) {
        mvsRef.value = data;
      }
      loaded();
    }
    function routeToMv(id: number) {
      routeTo('' + id);
    }
    onMounted(() => {
      getMvs();
    });
    return {
      mvAreaTabs,
      mvsRef,
      activeIndexRef,
      getMvs,
      genImgUrl,
      routeToMv,
      filterPlayCount,
      loadingRef,
    };
  },
};
</script>

<style scoped>
.playlist-item_box {
  position: relative;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  font-size: 14px;
}

.playlist-item__imgwarp {
  padding-top: 56%;
}

.playlist-item__img {
  width: 100%;
  height: 128px;
}
</style>
