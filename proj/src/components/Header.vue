<template>
  <div class="header">
    <div class="text"></div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "HEADER",
  props: ["name"],
};
</script>

<style scoped>
.header {
  background-color: salmon;
  border-bottom: 1px solid #aaa;
  height: 48px;
}
.text {
  display: inline-block;
  width: 50%;
  color: seashell;
}
</style>
