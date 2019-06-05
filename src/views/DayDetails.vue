<template>
  <div class="day-details">
    <h1>THIS IS THE DAY DETAILS KINDA</h1>
    <div>
      <h3>Food Search</h3>
      <food-search/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DayCreator from "@/components/DayCreator.vue";
import DayList from "@/components/DayList.vue";
import FoodSearch from "@/components/FoodSearch.vue";

export default {
  name: "DayDetails",
  mounted(){
    console.log("THE ID FROM THE URL IS ", this.$route.params.id)
  },
  components: {
    DayCreator,
    DayList,
    FoodSearch,
  }
};
</script>
