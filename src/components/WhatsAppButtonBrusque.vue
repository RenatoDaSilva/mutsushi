<template>
  <div>
    <a
      href="https://api.whatsapp.com/send?phone=5548998402077&text=Oii+estou+vindo+do+Site+&#128513;"
      target="_blank"
    >
      <img class="whatsappBrusque" src="../assets/wpp_numero_logo_brusque.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "WhatsAppButtonBrusque",
};
</script>

<style>
.whatsappBrusque {
  position: fixed;
  top: 80%;
  left: 62%;
  padding: 10px;
  z-index: 10000000;
  width: 500px;
  height: 100px;
  transition: 0.5s ease;
  clip: rect(0px, 500px, 100px, 400px);
}

.whatsappBrusque:hover {
  clip: rect(0px, 500px, 100px, 0px);
}

@media screen and (max-width: 800px) {
  .whatsappBrusque {
    position: relative;
    width: 80%;
    height: auto;
    clip: rect(0px, 500px, 100px, 335px);
    left: 10%;
  }
  .whatsappBrusque:hover {
    clip: rect(0px, 500px, 100px, 335px);
  }
}
</style>