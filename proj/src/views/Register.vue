<template>
  <div>
    <Header />
    <Footer />
    <SIDEBAR />
    <form @submit="submitForm(formvalues)">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formvalues.name" />
      </div>
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="formvalues.email" />
      </div>
      <div>
        <label for="phone">phone no:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          v-model="formvalues.phone"
        />
      </div>
      <div>
        <label for="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          v-model="formvalues.Dob"
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>

    <div>
      <pre>
    entered data is {{ JSON.stringify(formvalues, null, 2) }}
  </pre
      >
    </div>
    <!-- <v-app>
      <v-form>
        <v-text-field lable="Title" v-model="title"></v-text-field>
         <v-text-field
        v-model="name"
        :counter="10"
        :error-messages="errors"
        label="Name"
        required
      ></v-text-field> -->
    <!-- </v-form>
    </v-app>  -->
    <!-- <v-form>
      <v-text-field lable="Title" v-model="title"></v-text-field>
      <v-text-field
        v-model="name"
        :counter="10"
        :error-messages="errors"
        label="Name"
        required
      ></v-text-field>
    </v-form> -->
  </div>
</template>

<script>
import Header from "../components/Header";

import Footer from "../components/Footer";
import SIDEBAR from "../components/SIDEBAR";

export default {
  name: "Register",
  components: {
    Header,
    Footer,
    SIDEBAR,
  },
  data() {
    return {
      formvalues: {
        name: "",
        email: "",
        phone: "",
        Dob: "",
      },
    };
  },
  // mounted() {
  //   window.console.log(this.$store.state.Reg);
  //   this.submitForm();
  // },
  methods: {
    submitForm(event) {
      event.preventDefault();
      window.console.log("formvalues ", this.formvalues);
      this.$store.state.Reg = this.submitForm;
    },
    // ...mapActions(["submitForm"]),
  },
  computed: {
    // heroes() {
    //   return this.$store.state.heroes;
    // },
    // ...mapState({ heroes: (state) => state.heroes }),
  },
};
</script>

<style scoped>
input[type="text"],
input[type="date"],
input[type="tel"] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
