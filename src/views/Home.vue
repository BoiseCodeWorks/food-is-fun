<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <food-search />
  </div>
</template>

<script>
// @ is an alias to /src
import FoodSearch from "@/components/FoodSearch.vue";

export default {
  name: "home",
  components: {
    FoodSearch
  }
};
</script>
