<template>
  <div>
    <Header />
    <Footer />
    <SIDEBAR />
    <v-form ref="form" v-model="status">
      <v-text-field
        class="red--text"
        v-model="Name"
        :counter="10"
        :rules="NameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="mail"
        :rules="mailRule"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        class="red--text"
        v-model="mobileno"
        :counter="10"
        :rules="mobileRule"
        label="mobileno"
        required
      ></v-text-field>
      <v-text-field
        v-model="DOB"
        :rules="DOBRules"
        type="date"
        label="Date"
      ></v-text-field
      ><br />
      <router-link to="/user"
        ><button :disabled="!status" @click="store">
          Register
        </button></router-link
      >
      <button class="Rest" @click="reset">Reset Form</button>
    </v-form>
  </div>
</template>
<script>
import Header from "../components/Header";

import Footer from "../components/Footer";
import SIDEBAR from "../components/SIDEBAR";
import { mapActions } from "vuex";
export default {
  data: () => ({
    status: true,
    Name: "",
    arr: [],
    NameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "name should be below 20 charaters",
    ],
    mail: "",
    mailRule: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be status",
    ],
    mobileno: "",
    mobileRule: [
      (v) => !!v || "Phone Number is required",
      (v) => (v && v.length == 10) || "required 10 digits",
    ],
    DOB: "",
    DOBRules: [(v) => !!v || "Date is required"],
    components: {
      Header,
      Footer,
      SIDEBAR,
    },
  }),
  methods: {
    ...mapActions(["setRegister"]),
    reset() {
      this.$refs.form.reset();
    },
    resetdata() {
      this.$refs.form.resetdata();
    },
    store() {
      var Registerdetails = {
        Name: this.Name,
        mail: this.mail,
        mobileno: this.mobileno,
        Date: this.DOB,
      };
      this.setRegister(Registerdetails);
    },
  },
};
</script>

<style scoped>
button {
  color: rgb(146, 167, 109);
  background-color: blue;
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  font-weight: bold;
  font-family: bold;
  margin-right: 40px;
}
.Rest {
  color: rgb(44, 41, 41);
  background-color: rgb(151, 14, 14);
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-family: bold;
}
button:disabled {
  background-color: rgb(29, 138, 129);
}
</style>
