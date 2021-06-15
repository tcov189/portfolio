<template>
  <main class="flex flex-col min-h-screen sm:flex-row">
    <Menu
      class="sm:w-1/5 md:w-1/4 lg:w-3/12 xl:w-1/6"
      @tab-changed="tabChanged"
    />
    <section
      class="px-4 py-2 flex flex-col text-gray-700 sm:justify-center h-auto sm:pl-10 sm:w-4/5 md:w-3/4 lg:w-9/12">
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
  transition: opacity 0.2s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
