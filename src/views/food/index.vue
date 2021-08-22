<template>
 <div class="flex  mt-10">
   <div class="w-8/12 ">
     <WelcomeBanner/>
     <restaurants-carousel/>
   </div>
   <div class="w-4/12 pl-5 relative">
     <div  class="fixed w-96">
       <fixed-right-panel/>
     </div>
   </div>
 </div>
</template>

<script>
import WelcomeBanner from "@/views/food/WelcomeBanner";
import RestaurantsCarousel from "@/views/food/RestaurantsCarousel";
import FixedRightPanel from "@/views/food/FixedRightPanel";

export default {
  name: "Food",

  components: {
    WelcomeBanner,
    RestaurantsCarousel,
    FixedRightPanel,
  }
}
</script>

<style scoped>

</style>