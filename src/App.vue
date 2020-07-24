<template>
  <div id="app" class="panel panel-default">
    <HeaderMessage />
    <BodyMessage />
  </div>
</template>

<script>
import HeaderMessage from "./components/HeaderMessage.vue";
import BodyMessage from "./components/BodyMessage.vue";

export default {
  name: "App",
  components: {
    HeaderMessage,
    BodyMessage,
  },
};
</script>
