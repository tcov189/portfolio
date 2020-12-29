<template>
  <header class="bg-orange-700 sm:flex sm:justify-center sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-end px-4 py-3 sm:p-0">
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-300 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>

    <nav :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pb-4 space-y-1 text-center text-gray-300 font-bold uppercase sm:flex sm:flex-col sm:content-center sm:p-0">
      <p
        v-for="(tab, index) in tabs"
        class="px-3 cursor-pointer hover:opacity-100"
        :class="{ active: activeTab == tab, 'opacity-75': activeTab !== tab }"
        :key="`tab_${index}`"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </p>
    </nav>

  </header>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "About",
      tabs: ["About", "Skills", "Experience", "Education"],
      isOpen: false,
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      this.$emit('tab-changed', this.activeTab);
    },
  },
}
</script>