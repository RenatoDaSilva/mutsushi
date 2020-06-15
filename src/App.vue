<template>
  <div id="app" class="panel panel-default">
    <HeaderMessage />
    <BodyMessage />
    <FooterMessage />
  </div>
</template>

<script>
import HeaderMessage from "./components/HeaderMessage.vue";
import BodyMessage from "./components/BodyMessage.vue";
import FooterMessage from "./components/FooterMessage.vue";

export default {
  name: "App",
  components: {
    HeaderMessage,
    BodyMessage,
    FooterMessage
  }
};
</script>
