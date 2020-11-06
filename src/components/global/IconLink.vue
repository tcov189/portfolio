<template>
  <a
    class="w-16 h-16 rounded-full bg-gray-700 flex justify-center hover:bg-orange-700 "
    :href="link"
    target="_blank"
  >
    <FontAwesomeIcon :icon="icon" :type="type" class="w-6 text-gray-300">
    </FontAwesomeIcon>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "fas",
      required: false,
    },
  },
};
</script>

<style></style>
