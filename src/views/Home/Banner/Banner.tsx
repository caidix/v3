import { computed, onMounted, ref, defineComponent } from 'vue';
import { getBanner } from '/@/api/banner';
import { ResponseData } from '/@/utils/axios/types';
import { genImgUrl } from '/@/utils/common';
import { Carousel } from 'ant-design-vue';
import './index.scss';
export default defineComponent({
  name: 'Banner',
  setup() {
    const bannerRef = ref<Array<any>>([]);
    async function getBanners(): Promise<void> {
      const { banners }: ResponseData = await getBanner();
      console.log(banners);
      if (banners && Array.isArray(banners)) {
        const lessLen = banners.length % 2;
        if (lessLen !== 0) {
          banners.length = banners.length - lessLen;
        }
        bannerRef.value = banners;
      }
    }
    const filterBanLen = computed(() => {
      if (Array.isArray(bannerRef.value)) {
        return Math.floor(bannerRef.value.length / 2);
      } else {
        return 0;
      }
    });
    console.log(filterBanLen);
    onMounted(() => {
      getBanners();
    });
    return () => (
      <div>
        <Carousel autoplay>
          <>
            {() => {
              const i = [];
              for (let index = 0; index < bannerRef.value.length; index + 2) {
                i.push(
                  <div>
                    <div class="banner-item">
                      <img src={genImgUrl(bannerRef.value[index].imageUrl, 1000, 400)} alt="" />
                      <img src={genImgUrl(bannerRef.value[index + 1].imageUrl, 1000, 400)} alt="" />
                    </div>
                  </div>,
                );
              }
              return i.join('');
            }}
          </>
        </Carousel>
      </div>
    );
  },
});
