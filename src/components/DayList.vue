<template>
  <div class="day-list">
    <div class="day" v-for="day in days" :key="day._id">
      {{day.user}} - {{new Date(day.date).toLocaleDateString()}}
    </div>
  </div>
</template>

<script>
export default {
  name: "DayList",
  mounted(){
    this.$store.dispatch('getDays')
  },
  computed: {
    days() {
      return this.$store.state.days;
    }
  }
};
</script>