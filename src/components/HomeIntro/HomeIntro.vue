<template>
  <section id="site-intro" class="min-h-screen min-w-screen bg-grey-100 flex flex-wrap items-center py-10 md:py-20">
    <div class="md:container md:mx-auto md:p-7">
      <div class="flex flex-col-reverse	md:flex-row">
        <div class="w-full md:w-1/2 p-6">
          <h1 class="text-7xl tracking-normal md:text-8vw md:-tracking-5 pb-10 md:pb-5">Joel Bladt</h1>
          <p class="text-2xl leading-loose font-light md:pr-20 pb-14">
            {{ shortDescription }}
          </p>

          <div class="flex flex-wrap gap-4 items-center">
            <a class="transition duration-500
            px-12 md:px-20 md:mr-12 py-4
            border-2 border-gray-900 rounded-md
            text-sm hover:bg-gray-900 hover:text-white w-full md:w-max text-center md:text-left"
               href="#" target="_blank">Download CV</a>

            <a
                v-for="(social, i) in socials"
                :key="i"

                :href="social.url"
                target="_blank"
                class="transition duration-500 md:p-1.5 w-1/5 md:w-max justify-center md:justify-start font-semibold text-gray-400 hover:text-gray-500 inline-flex items-center"
            >
              <svg class="w-9 h-9 fill-current" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                      :d="social.path"
                      clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <img class="w-full md:w-2/3 md:rounded-full mt-10 md:mx-16 md:shadow-md md:border-8 md:border-solid md:border-white"
               src="https://media-exp1.licdn.com/dms/image/C4E03AQEPa43X6P0OHw/profile-displayphoto-shrink_800_800/0/1517583180824?e=1665619200&v=beta&t=-Y3zSVW2PLyXTFLwbyVbdWuLaaDz8HEoK0yt993Ta08"
               alt="#" />
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./HomeIntro.tsx" lang="ts"></script>
