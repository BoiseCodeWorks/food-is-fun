export default class Food {
  constructor(data) {
    this.name = data.food_name
    this.calories = data.nf_calories
    this.fat = data.nf_total_fat
    this.carbohydrates = data.nf_total_carbohydrate
    this.protein = data.nf_protein
    this.servingQty = data.serving_qty
    this.servingUnit = data.serving_unit
    this.imgUrl = data.photo.thumb
  }
}

/**
 * name: { type: String, required: true },
    fat: { type: Number, required: true },
    calories: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    protein: { type: Number, required: true },
    servingQty: { type: Number, required: true },
    servingUnit: { type: String, required: true },
    imgUrl: { type: String },
 */