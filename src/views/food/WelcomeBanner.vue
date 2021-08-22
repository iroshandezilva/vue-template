<template>
  <div class="relative flex w-full items-center rounded-lg bg-green-200 mb-5">
    <div class="">
      <div class="w-60 relative -mt-6 mb-8 -left-8 ">
        <img
          :src="require('@/assets/img/header.aaad1ac5.svg')"
          alt="visa"
        >
      </div>
    </div>
    <div class="flex-1">
      <h3 class="text-3xl font-bold text-gray-600 mb-3">$0 delivery for 30 days! 🎉</h3>
      <p class="text-sm text-green-700">$0 delivery fee for orders over $10 for 30 days</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeBanner"
}
</script>

<style scoped>

</style>