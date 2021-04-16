<template>
  <div>
    <div class="sidenav">
      <a href="/about">About</a>
      <a href="/home">HOMES</a>
      <a href="/dashboard">DashBoard</a>
      <a href="/re">Register</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SIDEBAR",
};
</script>

<style scoped>
.sidenav {
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 190px;
  left: 10px;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #c52690;
  display: block;
}

.sidenav a:hover {
  color: #2818c0;
}
</style>
