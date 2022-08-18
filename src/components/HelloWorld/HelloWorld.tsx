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
