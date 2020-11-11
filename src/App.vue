<template>
  <main class="flex min-h-screen bg-gray-200">
    <Sidebar @tab-changed="tabChanged" class="w-3/5 sm:w-1/6 md:w-1/5" />
    <section class="w-4/5 flex flex-col justify-center pl-10">
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </section>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";

export default {
  components: {
    Sidebar,
    About,
    Experience,
    Education,
  },
  data() {
    return {
      activeTab: "About",
    };
  },
  computed: {
    view() {
      return this.activeTab;
    }
  },
  methods: {
    tabChanged(tab) {
      console.log(tab);
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
