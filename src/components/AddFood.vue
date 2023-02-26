<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="300"
    >

      <template v-slot:activator="{ props }">
        <v-row class="justify-start ma-3">
          <v-btn
            color="primary"
            v-bind="props"
            class="justify-start mb-2"
          >
            Add
          </v-btn>
        </v-row>
      </template>

      <v-form @submit.prevent="submitNewFood" method="post" v-model="formValid" ref="addFoodForm">
        <v-card>
          <v-card-title>
            <span class="text-h5">New Food</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-text-field
                name="foodName"
                v-model="foodName"
                label="Name"
                density="compact"
                required
                clearable
              />

              <v-text-field
                name="foodKcal"
                v-model="foodKcal"
                label="kcal"
                hint="kcal per 100 grams"
                density="compact"
                required
                clearable
              />

              <v-select
                label="Category"
                :items="foodCategories"
                v-model="foodCategory"
                density="compact"
              />

            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog = false, this.$refs.addFoodForm.reset()"
            >
              Close
            </v-btn>
            <v-btn
              color="primary"
              variant="text"
              @click="submitNewFood(), dialog = false, this.$refs.addFoodForm.reset()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>

    </v-dialog>
  </v-row>
</template>

<script>
  import {FoodService} from "@/services/FoodService";

  export default {

    data: () => ({
      dialog: false,
      formValid: false,
      foodName: '',
      foodKcal: '',
      foodCategory: '',
      foodCategories: ["Gemüse", "Obst", "Fleisch", "Brot"]
    }),

    methods: {

      submitNewFood() {
        const foodService = new FoodService();

        const newFood =
          {
            "name": this.foodName,
            "kcal": this.foodKcal,
            "category": this.foodCategory,
            "image": "banane.jpg"
          }

        foodService.create(newFood)
        .then(response => {
          this.$emit('AddFoodDialogClosed');
        });
      },

    }
  }
</script>
