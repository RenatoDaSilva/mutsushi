<template>
  <div>
    <a href="https://www.instagram.com/mutsushidelivery/?hl=pt-br" target="_blank">
      <img class="instagram" src="../assets/insta_conta_logo.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "InstagramButton",
};
</script>

<style>
.instagram {
  position: fixed;
  top: 38%;
  left: 61.3%;
  padding: 10px;
  z-index: 10000000;
  width: 500px;
  height: 92px;
  transition: 0.5s ease;
  clip: rect(0px, 500px, 100px, 420px);
}
.instagram:hover {
  clip: rect(0px, 500px, 100px, 0px);
}

@media screen and (max-width: 800px) {
  .instagram {
    position: relative;
    width: 80%;
    height: auto;
    clip: rect(auto, auto, auto, auto);
    left: 10%;
  }
  .instagram:hover {
    clip: rect(0px, 500px, 100px, 335px);
  }
}
</style>