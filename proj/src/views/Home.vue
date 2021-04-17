<template>
  <div>
    <div class="split left">
      <div class="centered">
        <h2>To know more about a Vue</h2>
        <p>Press on the side button>></p>
        <p>
          Vue uses an HTML-based template syntax that allows binding the
          rendered DOM to the underlying Vue instance's data. All Vue templates
          are valid HTML that can be parsed by specification-compliant browsers
          and HTML parsers. Vue compiles the templates into virtual DOM render
          functions. A virtual Document Object Model (or “DOM”) allows Vue to
          render components in its memory before updating the browser. Combined
          with the reactivity system, Vue is able to calculate the minimal
          number of components to re-render and apply the minimal amount of DOM
          manipulations when the app state changes. Vue users can use template
          syntax or choose to directly write render functions using hyperscript
          either through function calls or JSX.[18] Render functions allow
          application to be built from software components.
        </p>
        To know more about vue <a href="https://vuejs.org/">Vue org</a>
      </div>
    </div>
    <div class="divbtn">
      <button class="btn" @click="goToHome()">Explore more >></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
  },
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
.split {
  height: 80%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  border-radius: 15px 200px 200px 5px;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 5%;
}

.left {
  left: 0;
  background-color: #111;
}
.btn {
  justify-content: space-between;
  border-radius: 25px;
  background: #73ad21;
  padding: 20px;
  width: 200px;
  height: 150px;
  position: absolute;
  right: 0px;
  /* width: 300px; */
  border: 3px solid #496d18;
  /* padding: 10px; */
}
.btn:hover {
  background-color: red;
}
.divbtn {
  align-content: center;
  position: absolute;
  right: 0px;
  width: 50%;
  /* border: 3px solid #73ad21; */
  float: right;
  padding-top: 18%;
  margin-right: 20%;
}
.centered {
  color: whitesmoke;
}
</style>
