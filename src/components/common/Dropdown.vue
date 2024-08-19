<template>
  <details class="dropdown flex flex-1">
    <summary id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="flex text-base-content btn btn-outlin btn-sm border-slate-800 focus:ring-1 cursor-pointer focus:outline-none focus:primary rounded text-sm px-2 py-1.5 text-center items-center" type="button">
      <span class="flex flex-1">{{ drop.button }}</span>
      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </summary>
    <!-- Dropdown menu -->
    <div class="menu text-sm z-10 mt-1 p-2 rounded shadow dropdown-content w-56 bg-zinc-900 divide-gray-600 border border-slate-800" aria-labelledby="dropdownDividerButton">
      <div class="join">
        <input type="text" placeholder="Search by Title" class="input input-bordered input-sm join-item w-full max-w-xs rounded border-slate-800" />
        <button class="join-item btn btn-outline btn-sm border-slate-800 bg-base-300 rounded hover:bg-base-content">
          <IconSearch class="w-4" filled :fontControlled="false" />
        </button>
      </div>
      <ul class="mt-1 py-1">
        <template v-for="(item, index) in drop.items">
          <li>
            <a href="#" class="block px-2 py-1 rounded hover:bg-zinc-800 hover:text-white">Item</a>
          </li>
        </template>
      </ul>
    </div>
  </details>
</template>
<script setup lang="ts">
import { IconSearch } from "@/assets/img/icons/";
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
