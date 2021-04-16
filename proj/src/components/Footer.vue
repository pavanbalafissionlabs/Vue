<template>
  <div>
    <footer class="footer">
      <p>
        Name: XYZ<br />
        write us at :<a href="mailto:@mail.com">@mail.com</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
