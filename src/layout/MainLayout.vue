<template>
  <div class="flex min-h-screen bg-gray-200">
    <Sidebar class="w-64" />
    <Content>
      <slot></slot>
    </Content>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";

export default {
  components: {
    Sidebar,
    Content,
  },
};
</script>

<style></style>
