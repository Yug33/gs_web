<template>
  <div class="container-fluid mt-3">
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
    async getCandidatesCount() {
      const response = await Api.methods.getCandidatesCount();
      const totalCount = Number(response.data.count);
      this.rows = Math.round(totalCount / 9);
    }
  },
  components: {
    UserCard
  },
  mounted() {
    this.getCandidates();
    this.getCandidatesCount();
  }
};
</script>
