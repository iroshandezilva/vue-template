<template>
  <card>
    <div class="flex">
      <div class="w-8/12 pr-8 border-r border-gray-200 dark:border-gray-600 ">
        <div class="flex items-center mb-4">
          <h3 class="text-base font-semibold dark:text-gray-100">
            Monthly Summary
          </h3>
        </div>
        <div class="flex">
          <div class="w-4/12">
            <div class="p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-500">
                Income
              </p>

              <h6 class="text-green-400 text-base font-semibold">
                $5,000.00
              </h6>

              <span class="block h-px w-full my-3 bg-gray-200 dark:bg-gray-700" />

              <p class="text-sm text-gray-500">
                Expenses
              </p>

              <h6 class="text-red-400 text-base font-semibold">
                -$300.00
              </h6>
            </div>
          </div>
          <div class="w-8/12">
            <chart
              class="w-92 h-52 ml-8 "
              :chart-data="state.chartData"
              :chart-options="state.chartOptions"
            />
          </div>
        </div>
      </div>
      <div class="w-4/12 pl-8">
        <div class="flex items-center mb-4">
          <h3 class="text-base font-semibold dark:text-gray-100">
            Transactions
          </h3>
        </div>
      </div>
    </div>

    <div class="" />
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
  },

  data () {
    return {
      state: {
        chartData: {
          datasets: [
            {
              label: 'Cash Expenses',
              data: [0, 10, 15, 30, 10,],
              backgroundColor: 'rgb(52, 211, 153, 0.5)',
              borderWidth: 0.0,
              lineWidth:1,
              pointRadius: '',
              pointBorderColor: 'rgb(0, 0, 0)',
              fill:'start',

            },
            {
              label: 'Card Expenses',
              data:  [10, 15, 5, 20, 15, 0],
              backgroundColor: 'rgb(66,151,255, 0.5)',
              borderWidth: 0,
              lineWidth:1,
              pointRadius: '',
              pointBorderColor: 'rgb(0, 0, 0)',
              fill:'start',
            }
          ],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['09 Nov', '12 Nov', '15 Nov', '18 Nov', '21 Nov']
        },
        chartOptions: {
          tooltip:true,
          responsive: true,
          maintainAspectRatio:false,
          borderColor:'#ff0000',
          legend: {
            align  :'start',
            labels: {
              usePointStyle: true,
              boxHeight:8,
              boxWidth:8,
            },
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>