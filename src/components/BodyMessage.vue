<template>
  <div class="panel-body">
    <h1 style="color: #5e9ca0; text-align: center;">
      <strong>Nosso portal est&aacute; sendo preparado</strong>
    </h1>
    <h2
      style="color: #2e6c80; text-align: center;"
    >Em breve voc&ecirc; ter&aacute; maravilhosas novidades, aguarde.</h2>
    <img class="sushi-gif" src="../assets/sushi-gif.gif" />
  </div>
</template>

<script>
export default {
  name: "BodyMessage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-body {
  padding: 0;
  border: 0px;
  height: 450px;
  overflow-y: auto;
}

.sushi-gif {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  width: 100%;
}
</style>
