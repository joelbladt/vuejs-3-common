import Vue from 'vue'
import { mdiTwitter, mdiInstagram, mdiGithub, mdiLinkedin } from '@mdi/js'

export default Vue.extend({
  name: 'HomeIntro',

  inject: {
    theme: {
      default: { isDark: false },
    },
  },

  data: () => ({
    shortDescription: "I am software developer, working for event it AG. I like to spend time with my family in my spare time and build at my smart home to life smarter.",
    socials: [
      {
        icon: "instagram",
        url: "https://www.instagram.com/joelbladt/",
        path: mdiInstagram
      },
      {
        icon: "twitter",
        url: "https://twitter.com/joelbladt",
        path: mdiTwitter
      },
      {
        icon: "github",
        url: "https://github.com/joelbladt",
        path: mdiGithub
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/joelbladt/",
        path: mdiLinkedin
      }
    ]
  }),
})
