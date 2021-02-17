<template>
  <div class="Pare">
   <p>Hijo mio</p>
    <Fill></Fill>
  </div>
</template>

<script>
import Fill from './Fill.vue';

export default {
    components: {
    Fill
  },
  data() {
      return {
          menssage: 'Soc el Pare'
      }
  }
}
</script>

<style scoped>
</style>