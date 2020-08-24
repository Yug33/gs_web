<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Rivio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              variant="warning"
              >Search</b-button
            >
          </b-nav-form>

          <b-navbar-nav>
            <b-nav-item
              v-if="!isLoggedIn"
              @click="isLoggedIn ? logout() : login"
            >
              {{ isLoggedIn ? "Logout" : "Login" }}</b-nav-item
            >
            <b-nav-item v-else @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: !!localStorage.getItem("accessToken"),
    };
  },
  methods: {
    async logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push({ path: "/login" });
    },
    async login() {
      this.isLoggedIn = true;
      this.$router.push({ path: "/login" });
    },
  },
  watch: {
    isLoggedIn: function(newValue) {
      console.log(newValue);
      if (newValue !== this.isLoggedIn) {
        this.isLoggedIn = newValue;
      }
    },
  },
};
</script>
