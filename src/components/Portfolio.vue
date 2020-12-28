<template>
  <div id="portfolio">
    <h2 class="text-3xl uppercase font-bold mt-2 mb-8">Portfolio</h2>
    <div class="flex">
        <PortfolioItem />
    </div>
  </div>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem.vue';


export default {
    components: {
        PortfolioItem,
    }
}
</script>

<style>

</style>