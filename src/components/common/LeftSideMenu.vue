<template>
  <ul class="menu space-y-2">
    <li>
      <a href="#/game"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 group">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black"
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span class="ml-3">Dota2</span>
      </a>
    </li>
    <li>
      <a href="#/news"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
        </svg>
        <span class="ml-3">News</span>
      </a>
    </li>
    <li>
      <a href="#/bets"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-900 group focus:bg-gray-200 focus:text-gray-900">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Bets</span>
        <span
          class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">BETBOOM</span>
      </a>
    </li>

    <li>
      <a href="#/matches"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-900 group focus:bg-gray-200 focus:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-black dark:text-gray-400 dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
        </svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Matches</span>
        <span
          class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Live</span>
      </a>
    </li>
    <li>
      <details open>
        <summary
          class="p-2 w-full text-sm font-normal text-white rounded-lg transition duration-75 hover:bg-gray-100  hover:text-black ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor"
            class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-black dark:text-gray-400 dark:group-hover:text-black">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>
          <span class="flex-1 ml-3 whitespace-nowrap">
            Tournaments
          </span>
        </summary>
        <ul>
          <li>
            <a href="#/tours"
              class="flex items-center p-2 pl-11 w-full text-sm font-normal text-white rounded-lg transition duration-75 hover:text-gray-900 group hover:bg-gray-100 focus:bg-gray-200 focus:text-gray-900 ">Upcoming
            </a>
          </li>
          <li>
            <a href="#/tours"
              class="flex items-center p-2 pl-11 w-full text-sm font-normal text-white rounded-lg transition duration-75 hover:text-gray-900 group hover:bg-gray-100 focus:bg-gray-200 focus:text-gray-900 ">Last
            </a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <a href="#/teams"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-900 group focus:bg-gray-200 focus:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-black dark:text-gray-400 dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
        <span class="ml-3">Teams</span>
      </a>
    </li>
    <li>
      <a href="#/teams"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-900 group focus:bg-gray-200 focus:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-black dark:text-gray-400 dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <span class="ml-3">Players</span>
      </a>
    </li>
  </ul>

  <ul class="menu pt-5 mt-5 space-y-2 border-t border-gray-500 ">
    <li>
      <a href="#"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg transition duration-75 hover:bg-gray-100  hover:text-gray-900 group focus:bg-gray-200 focus:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
        </svg>
        <span class="ml-3">Events</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center p-2 text-sm font-normal text-white rounded-lg transition duration-75 hover:bg-gray-100  hover:text-gray-900 group ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        <span class="ml-3">Help</span>
      </a>
    </li>
  </ul>
</template>