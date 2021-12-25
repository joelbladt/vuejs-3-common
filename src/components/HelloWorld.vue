<template>
  <div class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
    <div class="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
      <h1 class="font-bold text-gray-900 text-xl">{{ user.login }} from GitHub</h1>
      <img class="w-full rounded-md" :src="user.avatar_url" :alt="'This is ' + user.name" />
      <p class="text-center leading-relaxed">{{ user.bio }}</p>
      <a class="w-100 px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent"
      :href="user.html_url" target="_blank">Visit GitHub Profile</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserService from "@/services/UserService";
import User from "@/types/User";
import ResponseData from '@/types/ResponseData';

export default defineComponent({
  name: 'git-user',
  data() {
    return {
      user: {} as User
    }
  },
  methods: {
    get(username: string) {
      UserService.get(username)
          .then((response: ResponseData) => {
            this.user = response.data;
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e)
      });
    }
  },
  mounted() {
    this.get('joelbladt')
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
