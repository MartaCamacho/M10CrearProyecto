<template>
  <div class="Pare">
    <Fill :name="name"></Fill>
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
          name: 'Roberto'
      }
  },
  mounted () {
      this.$emit('name', this.name);
  },
}
</script>

<style scoped>
</style>