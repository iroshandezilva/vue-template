<template>
  <div>
    <carousel
      :settings="settings"
    >
      <slide
        v-for="slider in slides"
        :key="slider.id"
      >
        <component
          :is="slider.component"
          :theme="slider.theme"
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import CreditCard from "@/components/CreditCard";
import {Carousel, Slide, Pagination} from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';


export default {
  name: 'App',

  components: {
    Carousel,
    Slide,
    Pagination,
    CreditCard,

  },
  data(){
    return{
      settings: {
        itemsToShow: 2,
        itemsToScroll:3,
        snapAlign: 'start',
      },
      slides:[
        {
          id:1,
          component:'CreditCard',
          theme:'visa',
        },
        {
          id:2,
          component:'CreditCard',
          theme:'amex',
        },
        {
          id:3,
          component:'CreditCard',
          theme:'master',
        },
        {
          id:4,
          component:'CreditCard',
        }
      ]
    }
  }
};
</script>

<style>
.carousel__pagination-button{
   @apply w-2 h-2 bg-gray-200 rounded-full;
}
.carousel__pagination-button--active{
 @apply bg-green-300;
}
.carousel__pagination{
  @apply absolute -top-12 right-0 justify-end mr-4 mt-2 ;
}
</style>