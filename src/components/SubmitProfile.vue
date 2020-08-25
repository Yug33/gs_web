<template>
  <div class="row vertical-height justify-content-center align-items-center">
    <div class="col-sm-12 col-md-6 col-lg-5 shadow-lg p-5">
      <div class="d-flex flex-column">
        <div class="text-center font-weight-bolder font-size-large">
          Upload profile
        </div>
        <hr />
        <div>
          <b-alert
            v-model="showDismissibleAlert"
            variant="danger"
            dismissible
            >{{ errorMessage }}</b-alert
          >
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
            id="input-1"
            v-model="form.web_address"
            type="text"
            required
            placeholder="Web Address"
          ></b-form-input>
          <b-form-file
            v-model="cover_letter"
            class="m-3 col-11"
            placeholder="Attach cover letter"
            accept="application/pdf"
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-form-file
            v-model="resume"
            class="m-3 col-11"
            placeholder="Attach cover letter"
            accept="application/pdf"
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-form-checkbox
            class="m-3 col-11"
            v-model="form.do_you_like_working"
            name="check-button"
            switch
            >Do you link working ?</b-form-checkbox
          >

          <b-button class="m-2 float-right" type="submit" variant="primary"
            >Submit</b-button
          >
        </b-form>
        <b-modal id="formStatusModal" hide-footer>
          <div class="d-block text-center">
            <h3>{{ modalMessage }}</h3>
          </div>
          <b-button
            class="m-2 float-right"
            variant="primary"
            @click="$bvModal.hide('formStatusModal')"
            >Okay</b-button
          >
        </b-modal>
      </div>
    </div>
    <b-overlay :show="show" no-wrap></b-overlay>
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
      show: false,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        web_address: "",
        do_you_like_working: false
      },
      cover_letter: {},
      resume: {},
      modalMessage: ""
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        this.show = true;
        const form = new FormData();
        form.append("form", JSON.stringify(this.form));
        form.append("resume", this.resume);
        form.append("cover_letter", this.cover_letter);
        const response = await Api.methods.submitProfile(form);
        if (
          response.status === "failed" &&
          response.error.response.data.code === "EMAIL_USED"
        ) {
          this.modalMessage = `Email already registered!`;
        } else {
          this.modalMessage = `Your info submitted successfully`;
        }
        this.$bvModal.show("formStatusModal");
        this.show = false;
        this.form = {
          first_name: "",
          last_name: "",
          email: "",
          web_address: "",
          do_you_like_working: false
        };
      } catch (error) {
        console.log(error, error.data);
        this.show = false;
      }
    }
  }
};
</script>
