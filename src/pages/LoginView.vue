<template>
  <div class="flex bg-white h-[600px] rounded items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <!-- <img class="mx-auto h-12" src="../assets/logo.svg" width="210"
                    alt="CyberSportScore" /> -->
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400">Войти в
          свой профиль
        </h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <a href="#" class="font-medium text-lime-600 hover:text-lime-500">
                        сабтекст
                    </a>
                </p> -->
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 
                            placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm
                            dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600" placeholder="Email" />
          </div>
          <div>
            <label for="password" class="sr-only">Пароль</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 
                            placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm
                            dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600" placeholder="Пароль" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500
                            dark:text-gray-200 dark:bg-gray-800 " />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900  ">Запомнить
              меня</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-lime-600 hover:text-lime-500 ">Я не
              помню пароль</a>
          </div>
        </div>

        <div>
          <button type="submit" class="btn btn-primary btn-md text-md flex w-full bg-lime-500">
            <LockClosedIcon class="h-5" />
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
</script>