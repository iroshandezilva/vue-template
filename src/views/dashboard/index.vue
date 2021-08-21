<template>
  <my-card />

  <monthly-summary />
</template>

<script>
import MyCard from "@/views/dashboard/MyCard";
import MonthlySummary from "@/views/dashboard/MonthlySummary";

export default {
  name: "Dashboard",

  components: {
    MyCard,
    MonthlySummary,
  }
};
</script>
