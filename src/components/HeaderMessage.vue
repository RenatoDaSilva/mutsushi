<template>
  <div>
    <img class="logo-heading" src="../assets/logo.png" />
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
  top: 10px;
  left: 58%;
  padding: 10px;
  z-index: 10000000;
  width: 50%;
  height: auto;
  clip: rect(0px, 600px, 120px, 420px);
}

img:hover {
  clip: rect(0px, 600px, 180px, 0px);
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