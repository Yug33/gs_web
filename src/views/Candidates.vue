<template>
  <div class="container-fluid mt-3">
    <b-card-group columns>
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

export default {
  name: "navbar",
  data() {
    return {
      rows: 100,
      currentPage: 1,
      candidates: [
        {
          id: "31",
          first_name: "Yogesh",
          last_name: "Rathod",
          email: "Yrathod33@gmail.com",
          web_address: "yratho:33",
          do_you_like_working: false,
          resume: "",
          cover_letter: ""
        },
        {
          id: "33",
          first_name: "Yogesh",
          last_name: "Rathod",
          email: "Yrathod3ss3@gmail.com",
          web_address: "yratho:33",
          do_you_like_working: false,
          resume: "",
          cover_letter: ""
        },
        {
          id: "32",
          first_name: "Yogesh",
          last_name: "Rathod",
          email: "Yrathod3ss3@gmail.com",
          web_address: "yratho:33",
          do_you_like_working: false,
          resume: "",
          cover_letter: ""
        },
        {
          id: "35",
          first_name: "Yogesh",
          last_name: "Rathod",
          email: "Yrathod3ss3@gmail.com",
          web_address: "yratho:33",
          do_you_like_working: false,
          resume: "",
          cover_letter: ""
        }
      ]
    };
  },
  components: {
    UserCard
  }
};
</script>
