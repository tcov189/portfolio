<template>
  <main class="flex flex-col min-h-screen sm:flex-row">
    <Menu
      class="sm:w-1/5 md:w-1/6 lg:w-2/8"
      @tab-changed="tabChanged"
    />
    <section class="p-4 flex flex-col text-gray-700 sm:w-4/5 sm:justify-center sm:pl-10">
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </section>
  </main>
</template>

<script>
import Menu from "@/components/Menu.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Portfolio,
    Menu
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
