<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-sm-12 col-md-6 col-lg-5 shadow-lg p-5">
      <div class="d-flex flex-column">
        <div class="text-center display-4 font-weight-bolder">
          Login
        </div>
        <hr />
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

          <b-button class="m-2 float-right" type="submit" variant="primary"
            >Login</b-button
          >
        </b-form>

        <router-link to="/signup" class="text-center mt-4"
          >Create an account</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
export default {
  name: "signup",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      const data = await Api.methods.signIn(this.form);
      console.log(data);
    },
  },
};
</script>
