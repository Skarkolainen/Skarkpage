<template>
    <div style="padding: 5%">
      <VueSlickCarousel :arrows="true" :dots="false" :vertical="true" autoplay :autoplaySpeed='1000' :rows='3'>
        <div><img src="https://via.placeholder.com/150" alt="" /></div>
        <div><img src="https://via.placeholder.com/150" alt="" /></div>
        <div><img src="https://via.placeholder.com/150" alt="" /></div>
        <div><img src="https://via.placeholder.com/150" alt="" /></div>
      </VueSlickCarousel>
    </div>
</template>

<script>

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    components: {
        VueSlickCarousel,
    }
    
}
</script>