<template>
  <aside class="bg-orange-700 flex sm:flex-col justify-center items-center shadow">
    <img
      src="../assets/images/profile.jpeg"
      alt="Profile picture"
      class="hidden sm:block border-4 border-gray-300 border-opacity-75 cursor-pointer rounded-full mb-4" @click="changeTab('About')" />
    <!-- <ul class="flex sm:block sm:space-y-3 py-2 text-center text-gray-300 font-bold uppercase">
      <li
        class="sm:hidden px-3 cursor-pointer hover:opacity-100 uppercase"
        @click="changeTab('About')"
        :class="{ active: activeTab == 'Active', 'opacity-75': activeTab !== 'Active' }"
      >
        About
      </li>
      <li
        v-for="(tab, index) in tabs"
        class="px-3 cursor-pointer hover:opacity-100 uppercase"
        :class="{ active: activeTab == tab, 'opacity-75': activeTab !== tab }"
        :key="`tab_${index}`"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </li>
    </ul> -->
    <FontAwesomeIcon icon="bars" type="fas" class="w-6 text-gray-300">
    </FontAwesomeIcon>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "About",
      tabs: ["Skills", "Experience", "Education"],
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
  @apply opacity-100;
}
</style>
