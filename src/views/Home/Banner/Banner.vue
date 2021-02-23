<template>
  <a-carousel auto-play>
    <div>
      <div class="banner-item" v-for="(items, index) in bannerRef" :key="index">
        <img
          v-for="item in items"
          :src="genImgUrl(item.imageUrl, 1000, 400)"
          alt=""
          :key="item.imageUrl"
        />
      </div>
    </div>
  </a-carousel>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getBanner } from '/@/api/banner';
import { ResponseData } from '/@/utils/axios/types';

export default {
  setup() {
    const bannerRef = ref<Nullable<Array<any>>>([]);
    async function getBanners(): Promise<void> {
      const { banners }: ResponseData = await getBanner();
      console.log(banners);
      if (banners && Array.isArray(banners)) {
        const lessLen = banners.length % 2;
        if (lessLen !== 0) {
          banners.length = banners.length - lessLen;
        }
        const newBanners = [];
        for (let index = 0; index < banners.length; index + 2) {
          newBanners.push([banners[index], banners[index + 1]]);
        }
        // bannerRef.value = newBanners;
      }
    }
    const filterBanLen = computed(() => {
      if (Array.isArray(bannerRef.value)) {
        return Math.floor(bannerRef.value.length / 2);
      } else {
        return 0;
      }
    });
    onMounted(() => {
      getBanners();
    });
    return {
      bannerRef,
      filterBanLen,
    };
  },
};
</script>
