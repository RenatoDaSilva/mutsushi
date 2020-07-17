<template>
  <div class="panel-body">
    <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      :captions="vfCaptions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:controls>
        <flux-controls />
      </template>

      <template v-slot:pagination>
        <flux-pagination />
      </template>
    </vue-flux>
  </div>
</template>

<script>
import { VueFlux, FluxControls, FluxPagination, FluxPreloader } from "vue-flux";
import slides from "../../slides.json";

export default {
  name: "BodyMessage",
  components: {
    VueFlux,
    FluxControls,
    FluxPagination,
    FluxPreloader
  },

  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: slides,
    vfTransitions: ["slide"]
  })
};
</script>

<style>
.vue-flux {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 400px;
  max-width: 800px;
}
</style>
