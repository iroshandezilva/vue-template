<template>
  <card>
    <div class="flex">
      <div class="w-8/12 border-r border-gray-200 dark:border-gray-600 ">
        <h3 class="text-base font-semibold dark:text-gray-100">
          My Card
        </h3>

        <div class="flex mt-7">
          <div class="mr-5">
            <button
              class="p-4 text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:bg-gray-600 dark:border-gray-500  dark:text-gray-400  dark:hover:bg-gray-700 border border-gray-200 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>

          <div class="flex-1 ">
            <div class="relative">
              <credit-card-carousel />
            </div>
          </div>
        </div>
      </div>
      <div class="w-4/12 pl-8">
        <div class="flex items-center mb-7">
          <h3 class="text-base font-semibold dark:text-gray-100 flex-1">
            Balance
          </h3>

          <drop-down
            class=" w-40"
            placeholder="Select an option"
            v-model="value"
            :options="['Last 7 days', 'Last Month', 'Last 3 Months']"
          />
        </div>
        <h3 class="text-4xl font-bold text-green-400 mb-3">
          $6,341.11
        </h3>
        <span class="text-green-400 text-sm">**** **** **** 4986</span>
        <div class="flex mt-4">
          <div class="w-1/2">
            <h6 class="text-gray-500 text-sm mb-2">
              Income
            </h6>
            <div class="flex items-center">
              <div class="bg-gray-100 p-2 rounded-full origin-center transform -rotate-45 text-green-400 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
              <p class="text-sm font-bold ml-3 dark:text-gray-300">
                $4,445.00
              </p>
            </div>
          </div>
          <div class="w-1/2">
            <h6 class="text-gray-500 text-sm mb-2">
              Expense
            </h6>
            <div class="flex items-center">
              <div class="bg-gray-100 p-2 rounded-full origin-center transform rotate-45 text-red-500 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
              <p class="text-sm font-bold ml-3 dark:text-gray-300">
                $4,445.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import DropDown from "@/components/DropDown";
import Card from "@/components/Card";
import CreditCardCarousel from "@/views/dashboard/CreditCardCarousel";

export default {
  name: "MyCard",
  components: {
    DropDown,
    Card,
    CreditCardCarousel
  },
}
</script>

<style scoped>

</style>