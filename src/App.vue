<template>
  <!--    <router-link to="/">Home</router-link>-->
  <!--    <router-link to="/about">About</router-link> -->
  <!--    <router-link to="/dashboard">Dashboard</router-link>-->

  <app-layout>
    <template #content>
      <router-view />
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";

export default {
  components: {
    AppLayout,
  },
};
</script>
<style></style>
