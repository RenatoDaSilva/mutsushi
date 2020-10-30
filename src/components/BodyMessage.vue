<template>
  <div>
    <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:pagination>
        <flux-pagination />
      </template>
    </vue-flux>
  </div>
</template>

<script>
import { VueFlux, FluxPagination, FluxPreloader } from "vue-flux";
import List from "../services/listaImg";

export default {
  name: "BodyMessage",
  components: {
    VueFlux,
    FluxPagination,
    FluxPreloader,
  },
  data() {
    return {
      vfOptions: {
        autoplay: true,
      },
      vfImages: [],
      vfTransitions: ["fade"],
    };
  },
  mounted() {
    List.getList().then((res) => {
      this.vfImages = res.data.carousel;
    });
  },
};
</script>

<style>
.vue-flux {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>