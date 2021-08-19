<template>
  <div class="relative z-10 flex-shrink-0 flex h-16">
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex justify-start">
        <!--     Used Sniped URL   https://tailwindcomponents.com/component/wip-hamburger-menu-animation-->
        <nav x-data="{ open: false }">
          <button class="text-gray-500 w-10 h-10 relative focus:outline-none " @click="open = !open">
            <span class="sr-only">Open main menu</span>
            <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true"
                    class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                    :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
              <span aria-hidden="true"
                    class="block absolute  h-0.5 w-3 bg-current   transform transition duration-500 ease-in-out"
                    :class="{'opacity-0': open } "></span>
              <span aria-hidden="true"
                    class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                    :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
            </div>
          </button>
        </nav>
        <h1 v-if="title">{{ title }}</h1>
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <button
            type="button"
            class="
                bg-white
                p-1
                rounded-full
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
        >
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button
                type="button"
                class="
                    max-w-xs
                    bg-white
                    flex
                    items-center
                    text-sm
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PageTitle",

  props: {
    title: {
      type: String,
      default: '',
    },
  },


}

</script>

<style scoped>

</style>