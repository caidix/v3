<template>
  <div class="home">
    home
    <About/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from '../About';
export default defineComponent({
  name: "Home",
  components: {
    About
  }
});
</script>
