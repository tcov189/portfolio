<template>
  <div class="container flex min-h-screen bg-gray-200">
    <Sidebar />
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
