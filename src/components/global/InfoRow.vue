<template>
  <div>
    <div class="flex justify-between">
      <p class="uppercase font-bold text-lg">{{ item.title }}</p>
      <div class="text-orange-800">
        {{ item.time }}
      </div>
    </div>
    <p class="text-gray-700">{{ item.subtitle }}</p>
    <ul class="space-y-2 mt-6">
      <li class="text-sm" v-for="(item, index) in item.description" :key="`item_desc_${index}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    },
  }
};
</script>

<style></style>
