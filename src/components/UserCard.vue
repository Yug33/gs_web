<template>
  <b-card header="Candidate" header-tag="header" :title="getFullName">
    <b-card-text>{{candidate.email}}</b-card-text>
    <b-button
      @click="$root.$emit('bv::show::modal', candidate.id, $event.target)"
      variant="primary"
    >More details</b-button>
    <!-- MODAL -->
    <b-modal :id="candidate.id" centered title="Candidate" scrollable no-stacking>
      <div class="m-5">
        <div class="row about-list">
          <div class="col-6">
            <div class="media">
              <label>Name</label>
            </div>
            <div class="media">
              <label>Email</label>
            </div>
            <div class="media">
              <label>Web Address</label>
            </div>
            <div class="media">
              <label>like working ?</label>
            </div>
            <div class="media">
              <label>Cover letter</label>
            </div>
            <div class="media">
              <label>Resume</label>
            </div>
            <div class="media">
              <p>Please rate</p>
            </div>
          </div>
          <div class="col-6">
            <div class="media">
              <label>{{getFullName}}</label>
            </div>
            <div class="media">
              <label>{{candidate.email}}</label>
            </div>
            <div class="media">
              <label>{{candidate.web_address}}</label>
            </div>
            <div class="media">
              <label>{{candidate.do_you_like_working ? "Yes":"No"}}</label>
            </div>
            <div class="media">
              <label>
                <a :href="candidate.cover_letter" target="_blank">Click here to download</a>
              </label>
            </div>
            <div class="media">
              <label>
                <a :href="candidate.resume" target="_blank">Click here to download</a>
              </label>
            </div>
            <div class="media">
              <b-form-rating v-model="rating" variant="warning"></b-form-rating>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </b-card>
</template>

<script>
export default {
  props: {
    candidate: {
      requied: true,
      type: Object
    }
  },
  data() {
    return {
      rating: 0
    };
  },
  methods: {
    handleOk() {
      console.log("clicked okay");
    }
  },
  computed: {
    getFullName() {
      return `${this.candidate.first_name} ${this.candidate.last_name}`;
    }
  }
};
</script>
