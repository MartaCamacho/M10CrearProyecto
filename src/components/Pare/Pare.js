import Fill from '../Fill/Fill.vue';

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