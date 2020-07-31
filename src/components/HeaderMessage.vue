<template>
  <div>
    <img class="logo-heading" src="../assets/logo.jpg" />
  </div>
</template>

<script>
export default {
  name: "HeaderMessage",
};
</script>

<style scoped>
img {
  position: fixed;
  top: 0px;
  left: 70%;
  padding: 10px;
  z-index: 10000000;
  width: 30%;
  height: auto;
}

@media screen and (max-width: 800px) {
  img {
    visibility: hidden;
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    height: 100%;
  }
}
</style>