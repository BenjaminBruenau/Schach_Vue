<template>
  <div class="modal fade" v-bind:class="backgroundClass" tabindex="-2" role="dialog" v-bind:id="elementID" v-bind:ref="refName" aria-hidden="true">
    <slot/>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  name: "Modal",
  props: {
    refName: String,
    show: Boolean,
    elementID: String,
    backgroundClass: String
  },
  watch: {
    show() {
      console.log("SHOW MODAL: ", this.show)
      this.show ? this.openModal() : this.closeModal();
    },
    refName() {
      console.log(this.$refs)

    }
  },
  mounted() {
    this.modal = new Modal(this.$refs[this.refName], {
      backdrop: 'static',
      keyboard: false
    });
  },
  data: function () {
    return {
      modal: null
    }
  },
  methods: {
    openModal: function () {
      this.modal.show();
    },
    closeModal: function () {
      this.modal.hide();
    }
  }
}
</script>

<style scoped>

</style>