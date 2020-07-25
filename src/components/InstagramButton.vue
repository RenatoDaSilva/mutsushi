<template>
  <div>
    <a href="https://www.instagram.com/mutsushidelivery/?hl=pt-br" target="_blank">
       <img class="instagram" src="../assets/insta_conta_logo.png" />
    </a>
  </div>
</template>

<script>

export default {
  name: "InstagramButton"
};
</script>

<style>
.instagram {
  position: fixed;
  top: 66%;
  left: 61.3%;
  padding: 10px;
  z-index: 10000000;
  width: 500px;
  height: 88px;
  transition: 0.5s ease;
  clip: rect(0px,500px,100px,420px);
}

.instagram:hover {
  clip: rect(0px,500px,100px,0px);
}
@media screen and (max-width: 800px) {
  .instagram {
    width: 100%;
    height: auto;
    clip: rect(auto, auto, auto, auto);
    left: 0%;
  }

  .instagram:hover {
    clip: rect(auto, auto, auto, auto);
  }
}
</style>