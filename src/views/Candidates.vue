<template>
  <div class="container-fluid mt-3">
    <b-card-group columns>
      <div v-for="candidate in candidates" :key="candidate">
        <UserCard :candidate="candidate" />
      </div>
    </b-card-group>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue";

export default {
  name: "navbar",
  data() {
    return {
      candidates: [
        {
          first_name: "Yogesh",
          last_name: "Rathod",
          email: "Yrathod33@gmail.com",
          web_address: "yratho:33",
          do_you_like_working: false
        }
      ]
    };
  },
  components: {
    UserCard
  }
};
</script>
