<template>
  <nav class="flex sm:justify-center space-x-4 py-6">
    <router-link
        class="rounded-lg px-3 text-gray-700 font-medium hover:bg-gray-200 hover:text-gray-900"
        exact-active-class="text-green-400"
        to="/"
    >
      Home
    </router-link>
    <router-link
        class="rounded-lg px-3 text-gray-700 font-medium hover:bg-gray-200 hover:text-gray-900"
        exact-active-class="text-green-400"
        to="/about"
    >
      About
    </router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
