<template>
  <div
    class="relative rounded-xl w-full mr-5 p-5 overflow-hidden"
    :class="activeTheme"
  >
    <div class="absolute w-32 h-32 rounded-full bg-green-100 -bottom-5 -right-5 opacity-10" />

    <div class="w-10 mb-20 ">
      <img
        :src="require('@/assets/img/visa-text-white.svg')"
        alt="visa"
      >
    </div>

    <div class="text-left">
      <h6 class="text-base text-white font-bold">
        $6,341.14
      </h6>
      <span class="text-white text-sm">**** **** **** 4986</span>
    </div>
  </div>
</template>

<script>

const THEMES = {
  default: [
    'card',
  ],

  visa: [
    'visa',
  ],

  master: [
    'master',
  ],
  amex: [
    'amex',
  ],
}

export default {
  name: "CreditCard",

  props:{
    theme:{
      type: String,
      default:'',
    },
  },

  computed: {
    activeTheme() {
      return THEMES[this.theme] || THEMES['default']
    },

  },

}
</script>

<style scoped>

.card{
  background-image: linear-gradient(
      -225deg, rgb(54, 154, 110) 0px, rgb(62, 176, 126) 48%, rgb(107, 203, 160) 100%);
}
.visa{
background-image: linear-gradient(
    -225deg, #3b35e9 0px, #5f5bd3 48%, #7671ff 100%);
}
.master{
  background:linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);
}
.amex{
  background:linear-gradient(135deg, #f2d50f 0%,#da0641 100%);
}

</style>