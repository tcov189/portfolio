<template>
  <a
    class="cursor-pointer text-orange-700 hover:text-orange-500"
    :href="destination"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: "DefaultLink",
  props: {
    destination: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

