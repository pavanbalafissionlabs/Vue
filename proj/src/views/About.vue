<template>
  <div class="about">
    <Header />
    <Footer />
    <SIDEBAR />
    <h1>This is an about page thanks for see this page</h1>
  </div>
</template>

<script>
import Header from "../components/Header";

import Footer from "../components/Footer";
import SIDEBAR from "../components/SIDEBAR";
export default {
  components: {
    Header,
    Footer,
    SIDEBAR,
  },
};
</script>

<style scoped></style>
