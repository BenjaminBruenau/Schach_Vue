<template>
  <div class="container">
    <div class="body d-md-flex align-items-center justify-content-between">
      <div class="box-1 mt-md-0 mt-5"> <img src="../../assets/images/login-background.jpeg" class="" alt=""> </div>
      <div class=" box-2 d-flex flex-column h-100">
        <div class="mt-5">
          <p class="mb-1 h-1">Sign Up </p>
          <div class="d-flex flex-column ">


            <div class="card-body">
              <form>

                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                  <input type="text" class="form-control" placeholder="Email" aria-label="Username"
                         aria-describedby="basic-addon1" v-model="user.email" required>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                  <input type="Password" class="form-control" placeholder="Password" v-model="user.password" required>
                </div>

              </form>
            </div>

            <div class="mt-1">
              <button class="btn btn-primary" @click="submit()">Register<span class="fas fa-chevron-right ms-1"></span></button>
              <div v-if="registerSuccess" class="alert alert-success alert-dismissible fade show mt-3" role="alert" >
                <strong>
                  Successfully Registered Your Account.
                  <br>
                  Please Login with your new Account now
                </strong>
              </div>
              <div v-if="registerError" class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
                Error while trying to register your Account <br> {{ errorMessage }}
              </div>
              <div v-if="credentialsError" class="alert alert-danger alert-dismissible fade show mt-3">
                Email or Password missing!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {sleep} from "@/main";

export default {
  name: "Register",
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      registerSuccess: false,
      registerError: false,
      errorMessage: '',
      credentialsError: false,
    };
  },
  methods: {
    async submit() {
      if (!this.user.email || !this.user.password) {
        this.credentialsError = true;
        console.log("Email and/or Password missing!");
        return;
      }
      this.credentialsError = false;
      this.registerError = false;
      this.registerSuccess = false;

      const auth = getAuth();


      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then(() => {
          //alert('User successfully registered!')
          this.registerSuccess = true;
          this.user = {
            email: '',
            password: ''
          }
          sleep(1000).then(() => {
            this.$router.push('/login');
          });

        })
        .catch((err) => {
          this.registerError = true;
          this.errorMessage = err.message;
          console.log(err);
        });
    }
  }
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
  border: 0px;
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