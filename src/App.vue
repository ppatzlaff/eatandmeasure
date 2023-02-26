<template>
  <v-app id="app">
    <div class="mx-0 d-flex flex">
      <Navigation/>
    </div>
  </v-app>
</template>

<script>
import {defineComponent} from "vue";
import Navigation from "@/components/Navigation.vue";

export default defineComponent({
  components: { Navigation }
})
</script>
