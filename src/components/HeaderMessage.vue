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
  position: absolute;
  top: 10px;
  left: 68%;
  padding: 10px;
  z-index: 10000000;
  width: 30%;
  height: auto;
  /* clip: rect(0px, 600px, 120px, 420px); */
}

/* img:hover {
  clip: rect(0px, 600px, 180px, 0px);
}
 */

@media screen and (max-width: 800px) {
  img {
    visibility: hidden;
  }
}
</style>