<template>
  <div class="day-creator">
    <form @submit.prevent="handleSubmit" class="day-form">
      <input type="date" v-model="date">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DayCreator",
  data() {
    return {
      date: ""
    };
  },
  methods:{
    handleSubmit(){
      let data = {
        date: this.date,
        name: "jake"
      }
      this.$store.dispatch('createDay', data)
      this.date = ""
    }
  }
};

/**
 * 
 * 
 * var food = new Schema({
    name: { type: String, required: true },
    fat: { type: Number, required: true },
    calories: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    protein: { type: Number, required: true },
    servingQty: { type: Number, required: true },
    servingUnit: { type: String, required: true },
    imgUrl: { type: String },
})

var schema = new Schema({
    date: { type: String, required: true },
    user: { type: String, required: true },
    foods: [food]
}, { timestamps: true })


//Endpoints

// baseURL: 'http://bcw-sandbox.herokuapp.com/

//GetAll '/api/:user/logs' [GET]
//GetOne '/api/:user/logs/:logId' [GET]
//CreateLog '/api/:user/logs' [POST]
//AddFoodToLog '/api/:user/logs/:logId/foods [POST]
//EditLog '/api/:user/logs/:logId' [PUT]
//RemoveFood '/api/:user/logs/:logId/foods/:foodId' [DELETE]
//RemoveLog '/api/:user/logs/:logId' [DELETE]
 * 
 */
</script>



