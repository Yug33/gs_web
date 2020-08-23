<template>
  <div class="d-flex justify-content-center">
    <b-card title="Email Verification" class="col-6">
      <b-card-text>{{ verificationMessage }} </b-card-text>
      <b-button
        v-if="isEmailVerified"
        variant="primary"
        @click="$router.push({ path: '/login' })"
      >
        click to login
      </b-button>
    </b-card>
  </div>
</template>

<script>
import Api from "@/api";
export default {
  name: "verify",
  data() {
    return {
      verificationMessage: "Please wait we are verifing your mail",
      isEmailVerified: true,
    };
  },
  methods: {
    async checkVerify() {
      const emailVerification = await Api.methods.verifyEmail(
        this.$route.query.token
      );
      if (emailVerification.status && emailVerification.status === "failed") {
        this.verificationMessage = "Your link is not valid";
      } else {
        this.verificationMessage = "Your email is verified ✅";
        this.isEmailVerified = true;
      }
    },
  },
  async mounted() {
    this.checkVerify();
  },
};
</script>
