<template>
  <div>
    <div class="flex justify-between">
      <p class="uppercase font-bold text-lg">{{ job.title }}</p>
      <div class="text-orange-800">
        {{ job.time }}
      </div>
    </div>
    <p class="text-gray-700">{{ job.company }}</p>
    <ul class="space-y-2 mt-6">
      <li class="text-sm" v-for="(item, index) in job.description" :key="`job_desc_${index}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: null
    },
  }
};
</script>

<style></style>
