<template>
  <section id="site-intro" class="min-h-screen min-w-screen bg-grey-100 flex flex-wrap gap-4 items-center">
    <div class="md:container md:mx-auto p-7">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <h1>Joel Bladt</h1>
          <p class="text-2xl leading-loose font-light pr-20 pb-14">
            {{ shortDescription }}
          </p>

          <div class="flex flex-wrap gap-4 items-center">
            <a class="transition duration-500 px-12 md:px-20 mr-16 py-4 border-2 border-gray-900 rounded-md text-sm hover:bg-gray-900 hover:text-white"
               href="#" target="_blank">Download CV</a>

            <a
                v-for="(social, i) in socials"
                :key="i"

                :href="social.url"
                target="_blank"
                class="transition duration-500 p-1.5 font-semibold text-gray-400 hover:text-gray-500 inline-flex items-center"
            >
              <svg class="w-9 h-9 fill-current" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                      :d="social.path"
                      clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>

        </div>
        <div>
          <img class="w-2/3 rounded-full mt-10 mx-16 shadow-md border-8 border-white"
               src="https://media-exp1.licdn.com/dms/image/C4E03AQEPa43X6P0OHw/profile-displayphoto-shrink_800_800/0/1517583180824?e=1665619200&v=beta&t=-Y3zSVW2PLyXTFLwbyVbdWuLaaDz8HEoK0yt993Ta08"
               alt="#" />
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./HomeIntro.tsx" lang="ts"></script>
