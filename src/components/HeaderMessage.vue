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

<style scoped>
.panel-heading {
  position: sticky;
  top: 0;
}

.logo-heading {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.img-responsive {
  float: center;
  width: 60%;
  max-height: 60px;
}

@media screen and (max-width: 800px) {
  .img-responsive {
    float: center;
    width: 50%;
    max-height: 80px;
  }
  .logo-heading {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    height: 100%;
  }
}
</style>