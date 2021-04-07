<template>
  <div id="app">
    <BodyMessage />
    <HeaderMessage />
    <InstagramButton />
    <WhatsAppButtonTijucas />
    <WhatsAppButtonCanelinha />
    <WhatsAppButtonBrusque />
    <Cards />
  </div>
</template>

<script>
import HeaderMessage from "./components/HeaderMessage.vue";
import BodyMessage from "./components/BodyMessage.vue";
import Cards from "./components/Cards.vue";
import WhatsAppButtonTijucas from "./components/WhatsAppButtonTijucas.vue";
import WhatsAppButtonCanelinha from "./components/WhatsAppButtonCanelinha.vue";
import InstagramButton from "./components/InstagramButton.vue";
import WhatsAppButtonBrusque from "./components/WhatsAppButtonBrusque.vue";

export default {
  name: "App",
  components: {
    HeaderMessage,
    BodyMessage,
    Cards,
    InstagramButton,
    WhatsAppButtonTijucas,
    WhatsAppButtonCanelinha,
    WhatsAppButtonBrusque,
  },
};
</script>
