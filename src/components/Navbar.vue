<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-black mb-5">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">
        <div class="d-flex justify-content-center flex-row">
          <img src="../assets/images//chess-logo.webp" alt="" width="30" height="30" class="d-inline-block">
          <div>Chess</div>
        </div>

      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              v-on:click="openCollapsedNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="!collapsed" class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-start">
          <li class="nav-item"><a class="nav-link" aria-current="page" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="/schach">Play</a></li>
          <li class="nav-item"><a class="nav-link" href="/statistics">Statistics</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      collapsed: true,
    }
  },
  methods: {
    openCollapsedNavbar: function () {
      this.collapsed = !this.collapsed;
      console.log('Collapsed: ', this.collapsed)
    }
  }
}
</script>

<style scoped>

</style>