<script setup lang="ts">
import { ref } from "vue";
import vueVirtualScrolling from "@/packages/vue-virtual-scrolling/index.vue";

const items = ref([]);
for (let i = 0; i < 10000; i++) {
  items.value.push({
    id: i + 1,
    count: i + 1,
  });
}
</script>

<template>
  <vueVirtualScrolling :items="items" :item-size="54"  class="scroller" v-slot="{item}">
    <div class="list-iemt">
      <span>id:{{ item.id }}</span>
      <span>name:{{ item.count }}</span>
      <span>age:{{ item.count }}</span>
    </div>
  </vueVirtualScrolling>
</template>

<style scoped lang="scss">
.scroller{
  height: 500px;
  width: 500px;
}
.list-iemt{
  height: 54px;
  box-sizing: border-box;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>
