<template>

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
            <p v-if="userName" class="text-muted mb-2 user_name">{{ userName }}</p>
            <a href="#" @click="logout()" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a>
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-start">
          <li class="nav-item"><a class="nav-link nav_link" aria-current="page" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link nav_link" href="/about">About</a></li>
          <li class="nav-item"><a class="nav-link nav_link" href="/schach">Play</a></li>
          <li class="nav-item"><a class="nav-link nav_link" href="/statistics">Statistics</a></li>
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
      dropdownMenu: false,
      loggedIn: false,
      userProfilepic: '',
      userName: '',
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
            this.userName = '';
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
        if (profile.email) {
          this.userName = profile.email;
        }
      })
    },
  }
}
</script>

<style scoped>

.navbar .avatar {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

.dropdown-menu {
  display: block !important;
  right: .01em !important;
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

.user_name {
  font-size: .75em;
  padding: .25rem;
  color: #212529;
  text-decoration: none;
  background-color: transparent;
}

.nav_link {
  transition: transform 0.5s ease;
}

.nav_link:hover {
  position: relative;
  transform: scale(1.1);
}



</style>