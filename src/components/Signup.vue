<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-sm-12 col-md-6 col-lg-5 shadow-lg p-5">
      <div class="d-flex flex-column">
        <div class="text-center display-4 font-weight-bolder">
          Sign up
        </div>
        <hr />
        <b-form @submit="onSubmit">
          <b-form-input
            class="m-3 col-11"
            id="input-1"
            v-model="form.email"
            type="text"
            required
            placeholder="First Name"
          ></b-form-input>
          <b-form-input
            class="m-3 col-11"
            id="input-1"
            v-model="form.email"
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
            v-model="form.name"
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
export default {
  name: "Signup",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
