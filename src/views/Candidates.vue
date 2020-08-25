<template>
  <div class="container-fluid mt-3">
    <div>
      <b-nav tabs class="mb-4">
        <b-nav-item to="/home/all" exact exact-active-class="active" @click="watchUrl">All</b-nav-item>
        <b-nav-item to="/home/my" exact exact-active-class="active" @click="watchUrl">My ratings</b-nav-item>
        <b-nav-item
          to="/home/fiveStar"
          exact
          exact-active-class="active"
          @click="watchUrl"
        >Five star profiles</b-nav-item>
      </b-nav>
    </div>
    <b-card-group columns class="mb-4">
      <div v-for="candidate in candidates" :key="candidate.id">
        <UserCard :candidate="candidate" />
      </div>
    </b-card-group>
    <div class="bottom-stick d-flex justify-content-center align-items-center w-100">
      <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue";
import Api from "@/api";

export default {
  name: "deck",
  data() {
    return {
      rows: 100,
      currentPage: 1,
      candidates: []
    };
  },
  methods: {
    async getCandidates() {
      const limit = 9;
      const offset = (this.currentPage - 1) * limit;
      const response = await Api.methods.getCandidates(limit, offset);

      this.candidates = response.data;
    },
    async getMyRatedCandidates() {
      const response = await Api.methods.getMyRatedCandidates(
        localStorage.getItem("userId")
      );
      this.candidates = response.data;
    },
    async getFiveStarCandidates() {
      const response = await Api.methods.getFiveStarCandidates();
      this.candidates = response.data;
    },
    async getCandidatesCount() {
      const response = await Api.methods.getCandidatesCount();
      const totalCount = Number(response.data.count);
      this.rows = Math.round(totalCount / 9);
    },
    async getCandidatesBySearch(searchInput) {
      if (searchInput) {
        const response = await Api.methods.getCandidatesBySearch(searchInput);
        this.candidates = response.data;
      } else {
        this.getCandidates();
      }
    },
    async watchUrl() {
      console.log(this.$route.params.type);
      switch (this.$route.params.type) {
        case "all":
          this.getCandidates();
          this.getCandidatesCount();
          break;
        case "my":
          this.getMyRatedCandidates();
          break;
        case "fiveStar":
          this.getFiveStarCandidates();
          break;
        default:
          this.getCandidates();
          this.getCandidatesCount();
          break;
      }
    }
  },
  components: {
    UserCard
  },
  mounted() {
    this.$store.watch(this.$store.getters.getSearchInput, searchInput => {
      this.getCandidatesBySearch(searchInput);
    });
    this.watchUrl();
  },
  watch: {}
};
</script>
