<template>

  <AddFood v-on:AddFoodDialogClosed="closeAddFoodDialog"/>

  <v-card
    class="d-flex flex-wrap justify-start pa-1"
    :elevation="3"
    :color="'primary'"
  >

    <v-sheet v-for="item in wholeResponse" :key="item.id" color="primary">

      <v-card class="ma-1 text-left" width="100px">

        <v-card-title class="text-caption ma-n3">{{ item.name }}</v-card-title>

        <v-card class="ma-1">
          <v-img class="align-end text-white" v-bind:src="`../images/food/${item.image}`" cover></v-img>
        </v-card>

        <v-row class="justify-end ma-1">
          <v-menu open-on-hover :close-on-content-click="true">
            <template v-slot:activator="{ props }">
              <v-btn class="h-45 w-45 ma-2 elevation-0" v-bind="props" size="x-small" :ripple="false">...</v-btn>
            </template>

            <v-list>
              <v-list-item @click="editFood(item)">Edit</v-list-item>
              <v-list-item @click="deleteFood(item.id)">Delete</v-list-item>
            </v-list>

          </v-menu>
        </v-row>

      </v-card>

    </v-sheet>
  </v-card>

</template>

<script>
  import {FoodService} from '../services/FoodService';
  import AddFood from "@/components/AddFood.vue";
  import {defineComponent} from "vue";

  export default defineComponent({
    components: {AddFood},

    data() {
      return {
          wholeResponse: [],
          AddFood
      };
    },

    created() {
      this.getFoods()
    },

    methods: {

      closeAddFoodDialog: function() {
        this.getFoods();
        this.$forceUpdate;
      },

      getFoods() {
        const foodService = new FoodService();
        foodService.get()
          .then(response => {
            this.wholeResponse = response;

          });
      },

      deleteFood(id) {
        const foodService = new FoodService();
        foodService.delete(id)
          .then(response => {
            this.getFoods()
          });
      },

      editFood(food) {
        const foodService = new FoodService();
        foodService.update(food)
          .then(response => {
            console.log(food)
          });
      },

    }

 })

</script>
