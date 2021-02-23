import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import type { PropType } from 'vue';
type Singer = {
  name: string;
  id: number;
  [propName: string]: any;
};

export default defineComponent({
  props: {
    singers: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { push } = useRouter();
    const singers = computed(() => props.singers);
    return () => (
      <p class="text-overflow">
        {singers.value?.map((singer: Singer, index: number) => (
          <>
            <span class="playlist-item__name" onClick={() => push('/playlists/${id}')}>
              {singer.name}
            </span>
            {singers.value.length > index + 1 ? ' / ' : ''}
          </>
        ))}
      </p>
    );
  },
});
