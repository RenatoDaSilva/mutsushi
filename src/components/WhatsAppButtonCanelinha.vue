<template>
  <div>
    <a
      href="https://api.whatsapp.com/send?phone=5548996761473&text=Oii+estou+vindo+do+Site+&#128513;"
      target="_blank"
    >
      <img class="whatsappCanelinha" src="../assets/wpp_numero_logo_canelinha.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "WhatsAppButtonCanelinha",
};
</script>

<style>
.whatsappCanelinha {
  position: fixed;
  top: 52%;
  left: 62%;
  padding: 10px;
  z-index: 10000000;
  width: 500px;
  height: 100px;
  transition: 0.5s ease;
  clip: rect(0px, 500px, 100px, 400px);
}

.whatsappCanelinha:hover {
  clip: rect(0px, 500px, 100px, 0px);
}

@media screen and (max-width: 800px) {
  .whatsappCanelinha {
    position: relative;
    width: 80%;
    height: auto;
    clip: rect(0px, 500px, 100px, 335px);
    left: 10%;
  }
  .whatsappCanelinha:hover {
    clip: rect(0px, 500px, 100px, 335px);
  }
}
</style>