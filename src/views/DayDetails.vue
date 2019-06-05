<template>
  <div class="day-details">
    <div v-if="!day._id">Trying to get food details none known at this time</div>
    <div v-else>
      <h1>Total Daily Calories {{totalCals}}</h1>
      <div>
        <h3>Food Search</h3>
        <food-search/>
        <h3>On this {{new Date(day.date).toLocaleDateString('en-GB', {weekday:'long', year: 'numeric', day: 'numeric', month:'long'})}} thou hast eaten</h3>

        <div class="food-list">
          <div class="food-item" v-for="food in day.foods" :key="food._id">
            <img :src="food.imgUrl" height="80" alt>
            {{food.name}} - {{food.calories}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DayCreator from "@/components/DayCreator.vue";
import DayList from "@/components/DayList.vue";
import FoodSearch from "@/components/FoodSearch.vue";
import { setTimeout } from 'timers';

export default {
  name: "DayDetails",
  mounted() {
    this.$store.dispatch("getDay", this.$route.params.id);
    setTimeout(()=>{
      if(!this.day._id){
        this.$router.push({name: "home"})
      }
    }, 3000)
  },
  computed: {
    day() {
      return this.$store.state.day;
    },
    totalCals() {
      var total = 0;
      this.day.foods.forEach(f => (total += f.calories));
      return total.toFixed(2)
    }
  },
  components: {
    DayCreator,
    DayList,
    FoodSearch
  }
};

/**
 *    name: { type: String, required: true },
    fat: { type: Number, required: true },
    calories: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    protein: { type: Number, required: true },
    servingQty: { type: Number, required: true },
    servingUnit: { type: String, required: true },
    imgUrl: { type: String },
 */
</script>
