<template>
  <aside class="bg-orange-700 flex flex-col justify-center items-center">
    <div class="border-4 border-gray-300 border-opacity-75 cursor-pointer rounded-full p-8 mb-4">
      ME
    </div>
    <ul class="text-center space-y-3 text-gray-300 font-bold uppercase">
      <li
        v-for="(tab, index) in tabs"
        class="px-3 cursor-pointer hover:opacity-100 uppercase"
        :class="{ active: activeTab == tab, 'opacity-75': activeTab !== tab }"
        :key="`tab_${index}`"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "about",
      tabs: ["about", "experience", "education", "skills", "interests"],
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      this.$emit('tab-changed', this.activeTab);
    },
  },
};
</script>

<style scoped>
.active {
  @apply border-l-2 opacity-100;
}
</style>
