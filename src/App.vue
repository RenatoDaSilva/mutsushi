<template>
  <div id="app">
    <BodyMessage />
    <Cards />
    <HeaderMessage />
    <InstagramButton />
    <WhatsAppButton />
  </div>
</template>

<script>
import HeaderMessage from "./components/HeaderMessage.vue";
import BodyMessage from "./components/BodyMessage.vue";
import Cards from "./components/Cards.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
import InstagramButton from "./components/InstagramButton.vue";

export default {
  name: "App",
  components: {
    HeaderMessage,
    BodyMessage,
    Cards,
    InstagramButton,
    WhatsAppButton,
  },
};
</script>
