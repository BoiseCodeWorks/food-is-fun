<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h3>Day Creator</h3>
      <day-creator />
    </div>

    <div>
      <h3>Food Search</h3>
      <food-search/>
    </div>
    <div>
      <h3>Day List</h3>
      <day-list/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DayCreator from "@/components/DayCreator.vue";
import DayList from "@/components/DayList.vue";
import FoodSearch from "@/components/FoodSearch.vue";

export default {
  name: "home",
  components: {
    DayCreator,
    DayList,
    FoodSearch,
  }
};
</script>
