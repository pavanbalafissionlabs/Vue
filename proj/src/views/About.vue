<template>
  <div class="about">
    <Header />
    <Footer />
    <SIDEBAR />
    <h1>Contact us at</h1>
    <a href="https://twitter.com/?lang=en" class="fa fa-twitter"></a>
    <a href="https://www.google.com/" class="fa fa-google"></a>
    <a href="https://in.linkedin.com/" class="fa fa-linkedin"></a>
    <a href="#" class="fa fa-youtube"></a>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
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

<style scoped>
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}
</style>
