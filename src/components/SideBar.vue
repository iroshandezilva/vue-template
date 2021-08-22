<template>
  <div class="bg-white dark:bg-gray-900 md:flex md:flex-shrink-0">
    <div class="flex flex-col w-16">
      <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4 mb-8">
          <img
            class="h-8 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            alt="Logo"
          >
        </div>
        <div class="mt-5 flex-1 flex flex-col">
          <nav class="flex items-center flex-col flex-1 px-2 space-y-1">
            <router-link
              class="group inline-block text-gray-400 text-sm font-medium rounded-md p-2 mb-8 hover:bg-gray-100 hover:text-gray-600"
              to="/"
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </router-link>
            <router-link
              class="group w-full flex items-center justify-center  text-gray-400 text-sm font-medium rounded-md p-2 mb-8 hover:bg-gray-100 hover:text-gray-600"
              to="/food"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};

</script>

<style scoped></style>
