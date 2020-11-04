<template>
  <main class="flex min-h-screen bg-gray-200">
    <Sidebar class="w-3/5 sm:w-1/6 md:w-1/5" />
    <section class="flex flex-col justify-center pl-12">
      <About />
    </section>
  </main>
</template>

<script>

import Sidebar from "@/components/Sidebar.vue";
import About from "@/components/About.vue";

export default {
  components: {
    Sidebar,
    About
  },
};
</script>

<style></style>