<template>
  <card>
    <h3 class="text-base font-semibold dark:text-gray-100">
      Monthly Summary
    </h3>

    <chart />
  </card>
</template>

<script>
import Card from "@/components/Card";
import Chart from "@/components/Chart";

export default {
  name: "MonthlySummary",

  components: {
    Card,
    Chart,
  }
}
</script>

<style scoped>

</style>