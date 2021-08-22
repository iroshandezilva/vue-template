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
          :name="slider.name"
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
import FoodCategory from "@/components/FoodCategory";
import {Carousel, Slide, Navigation} from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';


export default {
  name: 'RestaurantsCarousel',

  components: {
    Carousel,
    Slide,
    Navigation,
    FoodCategory,

  },
  data(){
    return{
      settings: {
        itemsToShow: 7,
        itemsToScroll:1,
        snapAlign: 'start',
        wrapAround:true,
      },

      slides:[
        {
          id:1,
          component:'FoodCategory',
          name:'Pizza 0',
        },
        {
          id:2,
          component:'FoodCategory',
          name:'Pizza 1',
        },
        {
          id:3,
          component:'FoodCategory',
          name:'Pizza 2',
        },
        {
          id:4,
          component:'FoodCategory',
          name:'Pizza 3',
        },
        {
          id:5,
          component:'FoodCategory',
          name:'Pizza 4',
        },
        {
          id:6,
          component:'FoodCategory',
          name:'Pizza 5',
        },
        {
          id:7,
          component:'FoodCategory',
          name:'Pizza 6',
        },
        {
          id:8,
          component:'FoodCategory',
          name:'Pizza 7',
        },
        {
          id:9,
          component:'FoodCategory',
          name:'Pizza 8',
        },
        {
          id:10,
          component:'FoodCategory',
          name:'Pizza 9',
        },
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