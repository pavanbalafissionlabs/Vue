<template>
  <div>
    <Header />
    <Footer />
    <SIDEBAR />
    <h2>Hai</h2>
    <div class="Userdetails">
      <h2>you details enterd in previous page</h2>
      <div>
        Name :{{ RegiOfForm.Name }} <br />
        Mail:{{ RegiOfForm.mail }} <br />
        Phoneno: {{ RegiOfForm.mobileno }} <br />
        Dateof birth: {{ RegiOfForm.Date }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

import Footer from "../components/Footer";
import SIDEBAR from "../components/SIDEBAR";
import { mapGetters } from "vuex";

export default {
  name: "user",
  components: {
    Header,
    Footer,
    SIDEBAR,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["RegiOfForm"]),
  },
};
</script>

<style scoped>
.Userdetails {
  margin-left: 10%;
}
</style>
