<template>
  <div class="container">
    <div class="body d-md-flex align-items-center justify-content-between">
      <div class="box-1 mt-md-0 mt-5"> <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="" alt=""> </div>
      <div class=" box-2 d-flex flex-column h-100">
        <div class="mt-1">
          <p class="mb-1 h-1">Login </p>
          <div class="d-flex flex-column ">
            <p class="text-muted mb-2">Continue with...</p>
            <div class="d-flex align-items-center" style="justify-content: center; align-items: center">
              <a @click="googleLogin()" href="#" class="box me-2"> <span class="fab fa-google mb-2"></span>
                <p class="mb-0">Google</p>
              </a>
              <a @click="githubLogin()" href="#" class="box"> <span class="fab fa-github mb-2"></span>
                <p class="mb-0">Github</p>
              </a>
            </div>

            <div>
              <p class="text-muted mb-2">Or Login with a regular Account</p>
            </div>

            <div class="card-body">
              <form>

                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                  <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="user.email" required>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                  <input type="Password" class="form-control" placeholder="Password" v-model="user.password" required>
                </div>

              </form>

              <button class="btn btn-primary" @click="regularLogin()">Login<span class="fas fa-chevron-right ms-1"></span></button>
            </div>

            <div class="mt-1">
              <p class="mb-0 text-muted">Don't have an account yet?</p>
              <a class="btn btn-primary" href="/register">Sign Up<span class="fas fa-chevron-right ms-1"></span></a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loginSuccess" class="alert alert-success alert-dismissible fade show mt-3" role="alert" >
      <strong>Successfully Logged into Your Account</strong> <br>
      Redirecting to Game now...
    </div>
    <div v-if="loginError" class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
      Error while trying to login into Your Account <br> {{ errorMessage }}
    </div>
    <div v-if="credentialsError" class="alert alert-danger alert-dismissible fade show mt-3">
      Email or Password missing!
    </div>
  </div>

</template>

<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from 'firebase/auth';
import {sleep} from "@/main";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      loginSuccess: false,
      loginError: false,
      errorMessage: '',
      credentialsError: false,
    };
  },
  methods: {
    regularLogin() {
      if (!this.user.email || !this.user.password) {
        this.credentialsError = true;
        console.log("Email and/or Password missing!");
        return;
      }
      this.credentialsError = false;
      this.loginError = false;
      this.loginSuccess = false;

      const auth = getAuth();
      console.log("MAIL: ", this.user.email)
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: this.user.email,
              photoURL: 'https://e7.pngegg.com/pngimages/42/453/png-clipart-chess-piece-king-queen-staunton-chess-set-chess-king-queen.png'
            }).then(() => {
              this.loginSuccess = true;
              sleep(2000).then(() => {
                this.$router.push('/schach');
              });
            });
          })
          .catch(error => {
            this.loginError = true;
            this.errorMessage = error.message;
            console.log(error);
          });
    },
    googleLogin() {
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth();
      this.signIn(auth, googleProvider)
    },
    githubLogin() {
      const githubProvider = new GithubAuthProvider();
      const auth = getAuth();
      this.signIn(auth, githubProvider);
    },
    signIn(auth, provider) {
      signInWithPopup(auth, provider)
          .then(() => {
            this.loginSuccess = true;
            sleep(2000).then(() => {
              this.$router.replace('/schach');
            });
          })
          .catch(error => {
            this.loginError = true;
            this.errorMessage = error.message;
            console.log(error);
          });
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
}

.container {
  margin: 50px auto
}

.body {
  position: relative;
  width: 720px;
  height: 440px;
  margin: 20px auto;
  border: 1px solid #dddd;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px
}

.box-1 img {
  width: 100%;
  height: 100%;
  object-fit: cover
}

.box-2 {
  padding: 10px
}

.box-1,
.box-2 {
  width: 50%
}

.h-1 {
  font-size: 24px;
  font-weight: 700
}

.text-muted {
  font-size: 14px
}

.container .box {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  text-decoration: none;
  color: #615f5fdd
}

.box:active,
.box:visited {
  border: 2px solid #ee82ee
}

.box:hover {
  border: 2px solid #ee82ee
}

.btn.btn-primary {
  background-color: transparent;
  color: #ee82ee;
  border: 0;
  padding: 0;
  font-size: 14px
}

.btn.btn-primary .fas.fa-chevron-right {
  font-size: 12px
}

.footer .p-color {
  color: #ee82ee
}

.footer.text-muted {
  font-size: 10px
}

.fas.fa-times {
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  width: 20px;
  background-color: #f3cff379;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center
}

.fas.fa-times:hover {
  color: #ff0000
}

@media (max-width:767px) {
  body {
    padding: 10px
  }

  .body {
    width: 100%;
    height: 100%
  }

  .box-1 {
    width: 100%
  }

  .box-2 {
    width: 100%;
    height: 440px
  }
}
</style>