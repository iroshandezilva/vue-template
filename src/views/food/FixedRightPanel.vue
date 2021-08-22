<template>
  <tab-group>
    <tab-list class="flex justify-between bg-white px-6 py-4 rounded-xl border border-gray-200">
      <tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          class="bg-transparent p-2 rounded-full hover:bg-gray-100 hover:text-gray-400   mr-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          :class="[selected ? 'text-white bg-green-500' : 'text-gray-400 ']"
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </tab>
      <tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          class="bg-transparent p-2 rounded-full hover:bg-gray-100 hover:text-gray-400   mr-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          :class="[selected ? 'text-white bg-green-500' : 'text-gray-400 ']"
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </button>
      </tab>
      <tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          class="bg-transparent p-2 rounded-full hover:bg-gray-100 hover:text-gray-400   mr-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          :class="[selected ? 'text-white bg-green-500' : 'text-gray-400 ']"
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </tab>
      <tab
        v-slot="{ selected }"
        as="template"
      >
        <button
          class="bg-transparent p-2 rounded-full hover:bg-gray-100 hover:text-gray-400  mr-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          :class="[selected ? 'text-white bg-green-500' : 'text-gray-400 ']"
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </tab>
    </tab-list>
    <tab-panels>
      <tab-panel>
        <div class="flex flex-col mt-5 bg-white px-6 py-4 rounded-xl border border-gray-200">
          <div class="flex justify-between">
            <h6 class="font-semibold">
              My Order
            </h6>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              0 items
            </span>
          </div>
          <div class="flex-1">
            <div class="text-center my-40">
              <img
                class="w-24 mx-auto"
                :src="require('@/assets/img/cart-placeholder.svg')"
                alt=""
              >
              <h5 class="font-semibold">
                No Items
              </h5>
              <p class="text-gray-400 font-normal text-sm">
                Your cart is currently empty. Start adding products.
              </p>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-3">
              <span class=" text-sm font-medium uppercase text-gray-500">
                Total
              </span>
              <h6 class="font-semibold">
                $0.00
              </h6>
            </div>
            <button class="text-center text-sm font-semibold text-white px-4 py-4 rounded-lg w-full block bg-green-500">
              Start Checkout
            </button>
          </div>
        </div>
      </tab-panel>
      <tab-panel>Content 2</tab-panel>
      <tab-panel>Content 3</tab-panel>
      <tab-panel>Content 4</tab-panel>
    </tab-panels>
  </tab-group>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  name: "FixedRightPanel",

  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
}
</script>