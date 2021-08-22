<template>
  <div class="rounded-full">
    <div class="border border-gray-100">
      <img
        :src="require('@/assets/img/icon-2.svg')"
        alt="">
    </div>
    <h6 class="text-sm font-medium mt-3" v-if="name">{{ name }}</h6>
  </div>
</template>

<script>
export default {
  name: "FoodCategory",

  props:{
    name:{
      type:String,
      required:true,
    }
  }
}
</script>

