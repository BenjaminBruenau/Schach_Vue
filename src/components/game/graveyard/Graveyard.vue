<template>
<div v-if="graveyard" >
 <div v-for="(value, name) in counts" :key="name">

   {{ name }} {{value}}
 </div>
</div>
</template>

<script>
export default {
  name: "Graveyard",
  data() {
    return {
      counts: {}
    }
  },
  props: {
    graveyard: Array,
  },
  watch: {
    graveyard() {
      this.counts = {};
      this.graveyard.forEach(piece => {
        this.counts[piece] = (this.counts[piece] || 0) + 1;
      });
    }
  }
}
</script>

<style scoped>

</style>