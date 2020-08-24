<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Rivio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="getLoginState">
            <b-form-input size="sm" class="mr-sm-2" v-model="search" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="warning">Search</b-button>
          </b-nav-form>

          <b-navbar-nav>
            <b-nav-item
              v-if="!isLoggedIn"
              @click="getLoginState ? logout() : login()"
            >{{ getLoginState ? "Logout" : "Login" }}</b-nav-item>
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
      isLoggedIn: false,
      search: ""
    };
  },
  methods: {
    async logout() {
      localStorage.clear();
      this.$store.commit("logout");
      this.$router.push({ path: "/login" });
    },
    async login() {
      this.$router.push({ path: "/login" });
    }
  },
  mounted() {
    if (localStorage.accessToken) {
      this.$store.commit("login");
    }
  },
  computed: {
    getLoginState() {
      console.log(this.$store.state.isLoggedIn);
      return this.$store.state.isLoggedIn;
    }
  },
  watch: {
    search: function(input) {
      this.$store.commit("search", input);
    }
  }
};
</script>
