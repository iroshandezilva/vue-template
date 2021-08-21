<template>
  <div class="relative z-10 flex-shrink-0 flex h-16 mb-5">
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex items-center">
        <!--     Used Sniped URL   https://tailwindcomponents.com/component/wip-hamburger-menu-animation-->
        <nav x-data="{ open: false }">
          <button
            class="text-green-500 w-10 h-10 relative focus:outline-none "
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                :class="{'rotate-45': open,' -translate-y-2': !open }"
              />
              <span
                aria-hidden="true"
                class="block absolute  h-0.5 w-3 bg-current   transform transition duration-500 ease-in-out"
                :class="{'opacity-0': open } "
              />
              <span
                aria-hidden="true"
                class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                :class="{'-rotate-45': open, ' translate-y-2': !open}"
              />
            </div>
          </button>
        </nav>
        <div class="ml-3">
          <h1
            class="text-xl font-semibold text-gray-800 dark:text-gray-50"
            v-if="title"
          >
            {{ title }}
          </h1>
        </div>
      </div>

      <div class="ml-4 flex items-center md:ml-6">
        <button
          @click="toggleDark()"
          type="button"
          class=" text-gray-400 mr-4 dark:text-gray-300"
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
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
        <button
          type="button"
          class=" text-gray-400 mr-4 dark:text-gray-300 relative"
        >
          <div class="absolute -right-1 -top-1">
            <div class="w-3 h-3 relative">
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </div>
          </div>
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <button class="text-gray-400 dark:text-gray-300">
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
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
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

  methods: {
    toggleDark: () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
        } else {
          document.documentElement.classList.add('dark')
        }
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

}

</script>

<style scoped>

</style>