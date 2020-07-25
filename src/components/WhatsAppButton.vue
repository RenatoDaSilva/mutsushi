<template>
  <div>
    <a
      href="https://api.whatsapp.com/send?phone=5548996761473&text=Oii+estou+vindo+do+Site+&#128513;"
      target="_blank"
    >
      <img class="whatsapp" src="../assets/wpp_numero_logo.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "WhatsAppButton",
};
</script>

<style>
.whatsapp {
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

.whatsapp:hover {
  clip: rect(0px, 500px, 100px, 0px);
}

@media screen and (max-width: 800px) {
  .whatsapp {
    width: 100%;
    height: auto;
    clip: rect(auto, auto, auto, auto);
    left: 1%;
  }

  .whatsapp:hover {
    clip: rect(auto, auto, auto, auto);
  }
}
</style>