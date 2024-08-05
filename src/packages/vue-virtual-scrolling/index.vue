<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
const props = defineProps<{
  items: Array<{
    id: number;
    count: number;
  }>;
  itemSize: number;
}>();

const container = ref<any>();
const pool = ref<any>([]);

const setPool = () => {
  const scrollTop = container.value.scrollTop;

  let startIndex: number;
  let endIndex: number;
  startIndex = Math.floor(scrollTop / props.itemSize);
  endIndex = Math.ceil(
    (scrollTop + container.value.clientHeight) / props.itemSize
  );

  let stratPos= startIndex * props.itemSize;
  pool.value = props.items.slice(startIndex, endIndex).map((item, index) => {
    return {
      item: item,
      top: stratPos + index * props.itemSize,
    };
  });
};

window.setPool = setPool;
onMounted(() => {
  setPool();
});

const totalSize = computed(() => props.items.length * props.itemSize);
</script>

<template>
  <div class="scroller-container" ref="container" @scroll="setPool">
    <div class="scroller-wrapper" :style="{ height: totalSize + 'px' }">
      <div
        class="scroller-item"
        v-for="(poolItem, index) in pool"
        :key="poolItem.item.id"
        :style="{
          transform: `translateY(${poolItem.top}px)`,
        }"
      >
        <slot :item="poolItem.item"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroller {
  &-container {
    overflow-y: auto;
    border: 1px solid red;
  }
  &-wrapper {
    position: relative;
  }
  &-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
