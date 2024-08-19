<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn btn-sm bg-gray-100 hover:bg-gray-200 w-full border-0
    focus:ring-2 
    focus:ring-gray-300
    cursor-pointer
    focus:outline-none 
    rounded 
    text-sm 
    px-2 
    py-1.5 
    items-center">
      <span class="flex flex-1">{{ drop.button }}</span>
      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </div>
    <!-- Dropdown menu -->
    <div tabindex="0" class="
      menu dropdown-content bg-base-100 rounded-sm z-[1] w-full p-2 mt-1 shadow text-sm divide-gray-600 border">
      <div class="join">
        <input type="text" placeholder="Search by Title"
          class="input input-bordered input-xs join-item w-full max-w-xs rounded" />
        <button class="join-item btn  btn-xs rounded">
          <MagnifyingGlassIcon class="w-4" />
        </button>
      </div>
      <ul class="mt-1 py-1">
        <template v-for="(item, index) in drop.items">
          <li>
            <a href="#" class="flex justify-between px-2 py-1 rounded">
              <span>Item</span>
              <span class="flex gap-1 items-center">
                <D2Icon class="h-4 text-gray-500" />
                <img class="h-4 max-w-full" src="https://escorenews.com/media/logo/_30/t70677.webp" />
              </span>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { D2Icon, LOLIcon, CS2Icon, FortniteIcon, PubgIcon } from "../icons";

interface IItems {
  label: string;
  id: number;
}

interface IDrop {
  button: string;
  items: IItems[];
}

const props = defineProps<{
  drop: IDrop;
}>();
</script>
<style scoped></style>
