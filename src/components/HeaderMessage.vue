<template>
  <div class="panel-heading">
    <img class="logo-heading" src="../assets/logo.jpg" />
  </div>
</template>

<script>
export default {
  name: "HeaderMessage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-heading {
  position: sticky;
  top: 0;
}

.logo-heading {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  width: 100%;
}
</style>
