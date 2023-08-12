<template>
    <section class="relative">
        <div class="py-24 md:py-40 xl:py-32 2xl:py-44 3xl:py-52">
          <div class="container swiper_slide_wrapper">
            <div class="absolute swiper_slide_content">
              <h1 class="swiper_slide_h1 w-full md:w-4/5 3xl:w-11/12">
                CypherCrescent is among the leading providers of digitalisation
                solutions to enterprises
              </h1>
              <p class="">Our focus is :</p>
              <span
                class="mt-3 md:mt-5 xl:mt-8 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:space-x-4 xl:space-x-6"
                ><p
                  v-for="(benefit, index) in benefits"
                  :key="index"
                  class="text-white text-xs sm:text-sm lg:text-base 3xl:text-2xl flex items-center overflow-ellipsis"
                >
                  <span
                    class="h-5 w-5 md:h-6 md:w-6 md:p-2 border-2 border-ccl-red-800 bg-red-800 bg-opacity-30 flex justify-center items-center rounded-full mr-2"
                    ><i class="ri-check-line ri-md text-ccl-red-800"></i
                  ></span>
                  {{ benefit }}
                </p></span
              >
              <div class="mt-10 xl:mt-16 3xl:mt-14">
                <NuxtLink to="/solutions" tag="button" class="swiper_slide_b">
                  Explore
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        </section>
    </template>