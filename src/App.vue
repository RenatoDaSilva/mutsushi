<template>
  <div id="app" class="panel panel-default">
    <HeaderMessage />
    <BodyMessage />
    <InstagramButton/>
    <WhatsAppButton/>
  </div>
</template>

<script>
import HeaderMessage from "./components/HeaderMessage.vue";
import BodyMessage from "./components/BodyMessage.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
import InstagramButton from "./components/InstagramButton.vue";

export default {
  name: "App",
  components: {
    HeaderMessage,
    BodyMessage,
    InstagramButton,
    WhatsAppButton,
  },
};
</script>
