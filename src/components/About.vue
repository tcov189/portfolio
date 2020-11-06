<template>
  <div id="about">
    <h1 class="text-5xl leading- font-medium uppercase">
      Trevor <span class="text-orange-800">Covington</span>
    </h1>
    <p class="text-xl uppercase">
      4508 White Pine Dr. NE - Cedar Rapids, IA 52402
    </p>
    <p class="mb-8">
      <DefaultLink
        destination="tel:3193297493"
        text="(319) 319-7493"
        class="pr-2"
      />&nbsp;-&nbsp;
      <DefaultLink
        destination="mailto:tcovington189@gmail.com"
        text="tcovington189@gmail.com"
        class="pl-2"
      />
    </p>
    <p class="w-4/5 text-lg mb-8">
      Hello, my name is Trevor Covington. I am an experienced web developer with
      extensive experience in multiple areas of web development from front end
      development to back end programming and database operations.
    </p>
    <div class="flex space-x-6">
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
