<template>
  <div class="text-center sm:text-left" id="about">
    <h1 class="text-2xl font-medium uppercase mb-2 sm:text-5xl sm:leading-">
      Trevor <span class="text-orange-800">Covington</span>
    </h1>
    <p class="text-lg uppercase sm:text-xl">
      <span class="block sm:inline-block">4508 White Pine Dr. NE</span> <span class="hidden sm:inline-block">-</span> Cedar&nbsp;Rapids, IA 52402
    </p>
    <p class="mb-8">
      <DefaultLink
        destination="mailto:tcovington189@gmail.com"
        text="tcovington189@gmail.com"
        class="pr-2"
      />
      <DefaultLink
        destination="tel:3193297493"
        text="(319) 319-7493"
        class="block sm:inline-block sm:pl-2"
      />
    </p>
    <p class="text-lg mb-8 md:w-5/6">
      Hello, my name is Trevor Covington. I am an experienced web developer with
      extensive experience in multiple areas of web development from front end
      development to back end programming and database operations.
    </p>
    <div class="flex justify-between mt-24 sm:justify-start sm:mt-0 space-x-6">
        <IconLink icon="linkedin-in" type="fab" link="https://www.linkedin.com/in/trevcov/" />
        <IconLink icon="github" type="fab" link="https://github.com/tcov189" />
        <IconLink icon="twitter" type="fab" link="https://twitter.com/Tcov189" />
      </div>
  </div>
</template>

<script>
import DefaultLink from "@/components/global/DefaultLink";

export default {
  components: {
    DefaultLink,
  },
};
</script>

<style></style>
