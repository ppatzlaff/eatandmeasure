
<template>
  <Foodlist/>
</template>

<script>
import {defineComponent} from "vue";
import Foodlist from "@/components/Foodlist.vue";

export default defineComponent({
  components: {Foodlist},

  data() {
    return {
      componentKey: 0,
    };
  },

  methods: {

  }

})

</script>
