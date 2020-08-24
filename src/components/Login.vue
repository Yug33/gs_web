<template>
  <div class="row vertical-height justify-content-center align-items-center">
    <div class="col-sm-12 col-md-6 col-lg-5 shadow-lg p-5">
      <div class="d-flex flex-column">
        <div class="text-center display-4 font-weight-bolder">Login</div>
        <hr />
        <div>
          <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>{{ errorMessage }}</b-alert>
        </div>
        <b-form @submit="onSubmit">
          <b-form-input
            class="m-3 col-11"
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Email"
          ></b-form-input>

          <b-form-input
            class="m-3 col-11"
            id="input-2"
            type="password"
            v-model="form.password"
            required
            placeholder="Password"
          ></b-form-input>

          <b-button class="m-2 float-right" type="submit" variant="primary">Login</b-button>
        </b-form>

        <router-link to="/signup" class="text-center mt-4">Create an account</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
/* eslint-disable no-debugger */
export default {
  name: "signup",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      showDismissibleAlert: false,
      errorMessage: ""
    };
  },
  methods: {
    async onSubmit(evt) {
      debugger;
      evt.preventDefault();
      try {
        const response = await Api.methods.login(this.form);
        console.log(response);
        debugger;
        if (response.statusText === "Unauthorized") {
          this.showDismissibleAlert = true;
          this.errorMessage = response.data.message;
        } else {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("userId", response.data.userId);
          this.$store.commit("login");
          this.$router.push({ path: "/" });
        }
      } catch (error) {
        debugger;
        console.log(error, error.data);
      }
      this.checkVerify();
    },
    checkVerify() {
      if (this.$route.query.isVerify) {
        this.showDismissibleAlert = true;
        this.errorMessage = "Please verify your mail";
      }
    }
  },
  mounted() {
    this.checkVerify();
  }
};
</script>
