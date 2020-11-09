<template>
  <div class="h-screen overflow-y-scroll w-100" id="experience">
    <h2 class="text-3xl uppercase font-bold mt-2 mb-8">Experience</h2>
    <div class="space-y-12 w-4/5 mb-4">
      <ExperienceRow></ExperienceRow>
    </div>
  </div>
</template>

<script>
import ExperienceRow from './Experience/ExperienceRow.vue';

export default {
  components: {
    ExperienceRow,
  }
}
</script>