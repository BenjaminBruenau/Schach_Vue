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

      <div>
        <div class="nav-item dropdown">
          <a @click="toggleDropdown()" href="#" class="nav-item nav-link dropdown-toggle user-action">
            <img v-if="userProfilepic" :src="userProfilepic"  class="avatar" alt="Avatar">
            <img v-if="!userProfilepic" src="../assets/images/profile-icon.webp"  class="avatar" alt="Avatar">
            <b class="caret"></b>
          </a>
          <div v-if="dropdownMenu" class="dropdown-menu">

            <a href="#" @click="logout()" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a>
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                v-on:click="openCollapsedNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>

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

import {getAuth, signOut} from "firebase/auth";
import { getApp } from "firebase/app";

export default {
  name: "Navbar",
  data: function() {
    return {
      collapsed: true,
      dropdownMenu: false,
      loggedIn: false,
      userProfilepic: '',
    }
  },
  watch:{
    $route (to, from){
      console.debug("Redirect From: " + from + " To: " + to);
      this.updateAvatar();
    }
  },
  mounted() {
    try {
      getApp();
    } catch (error) {
      console.log("Can't Get App");
      return;
    }

    this.updateAvatar();

  },
  methods: {
    openCollapsedNavbar() {
      this.collapsed = !this.collapsed;
      console.log('Collapsed: ', this.collapsed)
    },
    toggleDropdown: function () {
      this.dropdownMenu = !this.dropdownMenu;
    },
    logout() {
      const auth = getAuth();
      if (!auth.currentUser) {
        console.log("Not currently logged in!");
        return;
      }

      signOut(auth)
          .then(() => {
            this.$router.push('login');
            this.dropdownMenu = false;
          })
          .catch(error => {
            console.log(error.message);
            this.$router.push('/');
          });
    },
    updateAvatar() {
      const user = getAuth().currentUser;

      if (!user) {
        this.loggedIn = false;
        this.userProfilepic = '';
        return;
      }
      this.loggedIn = true;
      user.providerData.forEach(profile => {
        //console.log("PHOTO: ", profile.photoURL)
        if (profile.photoURL) {
          this.userProfilepic = profile.photoURL
        }
      })
    }
  }
}
</script>

<style scoped>

.navbar img {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

.dropdown-menu {
  display: block !important;
}
.nav-link {
  color: whitesmoke !important;
}
.material-icons {
  font-size: 21px;
  line-height: 16px;
  vertical-align: middle;
  margin-top: -2px;
}

</style>