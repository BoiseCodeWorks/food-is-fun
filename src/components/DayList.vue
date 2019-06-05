<template>
  <div class="day-list">
    <div class="day" v-for="day in days" :key="day._id">
      <router-link
        :to="{ name: 'details', params: {id: day._id}}"
      >{{day.user}} - {{new Date(day.date).toLocaleDateString()}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayList",
  mounted() {
    this.$store.dispatch("getDays");
  },
  computed: {
    days() {
      return this.$store.state.days;
    }
  }
};
</script>