<template>
  <div class="bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600  p-8 rounded-lg">
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
            <div class="flex flex-0">
              <credit-card />
              <credit-card class="visa" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-4/12">
        <div class="pl-8">
          <div class="flex items-center">
            <h3 class="text-base font-semibold dark:text-gray-100 flex-1">
              Balance
            </h3>

            <drop-down
              class=" w-40"
              placeholder="Select an option"
              v-model="value"
              :options="['Batman', 'Robin 123', 'Joker']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCard from "@/components/CreditCard";
import DropDown from "@/components/DropDown";

export default {
  name: "MyCard",
  components: {
    CreditCard,
    DropDown,
  },
}
</script>

<style scoped>

</style>