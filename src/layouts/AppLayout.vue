<template>
  <div class="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-700">
    <side-bar />

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <page-title title="Page Title" />
          <slot name="content" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import PageTitle from "@/components/PageTitle";

export default {
  name: "AppLayout",

  components: {
    SideBar,
    PageTitle,
  },
};
</script>
