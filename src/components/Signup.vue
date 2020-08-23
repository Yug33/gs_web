<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-sm-12 col-md-6 col-lg-5 shadow-lg p-5">
      <div class="d-flex flex-column">
        <div class="text-center display-4 font-weight-bolder">
          Sign up
        </div>
        <hr />
        <div>
          <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            {{ errorMessage }}
          </b-alert>
        </div>
        <b-form @submit="onSubmit">
          <b-form-input
            class="m-3 col-11"
            id="input-1"
            v-model="form.first_name"
            type="text"
            required
            placeholder="First Name"
          ></b-form-input>
          <b-form-input
            class="m-3 col-11"
            id="input-1"
            v-model="form.last_name"
            type="text"
            required
            placeholder="Last Name"
          ></b-form-input>
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
            v-model="form.password"
            required
            placeholder="Password"
          ></b-form-input>

          <b-button class="m-2 float-right" type="submit" variant="primary"
            >Sign up</b-button
          >
        </b-form>

        <router-link to="/login" class="text-center mt-4"
          >Already account? Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
export default {
  name: "Signup",
  data() {
    return {
      showDismissibleAlert: false,
      errorMessage: "",
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const response = await Api.methods.signup(this.form);
        if (response.status === "failed") {
          this.showDismissibleAlert = true;
          this.errorMessage = response.error.response.data.message;
        } else {
          this.$router.push({ path: "/login" });
        }
      } catch (error) {
        console.log(error, error.data);
      }
    },
  },
};
</script>
