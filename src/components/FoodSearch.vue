<template>
  <div class="food-search">
    <form @submit.prevent="handleSubmit" class="search-form">
      <input type="text" v-model="query">
      <button type="submit">YUM!!</button>
      <div>
        {{error}}
      </div>
    </form>
    <div class="search-results">
      <div class="food-item" v-for="item in results" :key="item.food_name">
        <img :src="item.photo.thumb" height="80" alt>
        <span>{{item.food_name}}</span>
        <span>{{item.nf_calories}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
var api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
});
export default {
  name: "FoodSearch",
  data() {
    return {
      query: "",
      results: [],
      error: ""
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.error = ""
        let res = await api.post("", { query: this.query });
        this.results = res.data.foods;
      } catch (err) {
        this.error = "Invalid Search"
      }
    }
  }
};
</script>
