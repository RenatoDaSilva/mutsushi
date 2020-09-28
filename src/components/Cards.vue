<template>
  <div class="cards-body">
    <div class="header">Nosso cardápio</div>
    <div class="cards" v-for="card in cardList" v-bind:key="card.title">
      <div class="card">
        <img :src="card.image" />
        <h2>{{ card.title }}</h2>
        <p v-html="card.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../services/listaImg";

export default {
  name: "Cards",
  components: {},
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    List.getList().then((res) => {
      console.log(res.data);
      this.cardList = res.data.cards;
    });
  },
};
</script>

<style>
img {
  float: left;
  width: 30%;
  height: auto;
  padding-right: 45px;
  padding-bottom: 35px;
}

.card {
  display: inline-block;
  padding-right: 10%;
  padding-top: 25px;
  padding-left: 10%;
  border-bottom-style: solid;
}

p {
  font-size: 22px;
}

.header {
  font-size: 40px;
  text-align: center;
  background-image: linear-gradient(
    rgba(240, 67, 36, 0.438),
    rgba(255, 255, 255, 0)
  );
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 10px;
}

@media screen and (max-width: 800px) {
  img {
    float: center;
    width: 100%;
    height: auto;
  }
  .card {
    padding-right: auto;
    padding-left: auto;
  }
}
</style>