<route lang="json">
{
  "meta": {
    "title": "Work"
  }
}
</route>

<script setup>
useHead({
  title: 'Work',
})
</script>

<template>
  <div class="bg-gray-50 w-screen px-8">
    <!-- Page title -->
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Check out recent work
      </h2>
    </div>

    <!-- page body -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="h-48 w-48 rounded-sm shadow border border-red-200 bg-red-100 flex items-center justify-center m-8">
          <p class="text-red-900">video placeholder</p>
        </div>
        <div class="h-48 w-48 rounded-sm shadow border border-red-200 bg-red-100 flex items-center justify-center m-8">
          <p class="text-red-900">video placeholder</p>
        </div>
        <div class="h-48 w-48 rounded-sm shadow border border-red-200 bg-red-100 flex items-center justify-center m-8">
          <p class="text-red-900">video placeholder</p>
        </div>
        <div class="h-48 w-48 rounded-sm shadow border border-red-200 bg-red-100 flex items-center justify-center m-8">
          <p class="text-red-900">video placeholder</p>
        </div>
        <div class="h-48 w-48 rounded-sm shadow border border-red-200 bg-red-100 flex items-center justify-center m-8">
          <p class="text-red-900">video placeholder</p>
        </div>
      </section>
  </div>
</template>
