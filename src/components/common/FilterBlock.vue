<template>
    <div class="relative flex items-center grow py-3 px-3  border border-b-0 border-gray-300 rounded-t-md">
        <h1 class="flex-shrink mr-4 font-black text-sm text-black">Selector</h1>
    </div>
    <div class="border border-gray-300 rounded-b-md mb-6">
        <div class="p-2 flex flex-col gap-3">
            <Dropdown :drop="drop1" />
            <Dropdown :drop="drop2" />
            <Dropdown :drop="drop3" />
            <Dropdown :drop="drop4" />
            <div class="flex justify-end">
                <button class="btn btn-sm btn-primary">Button</button>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import Dropdown from './Dropdown.vue';

const drop1 = {
    button: "Tournament",
    items: [
        {
            label: "label 0",
            id: 0,
        },
        {
            label: "label 1",
            id: 1,
        },
    ],
};

const drop2 = {
    button: "Stage",
    items: [
        {
            label: "label 0",
            id: 0,
        },
        {
            label: "label 1",
            id: 1,
        },
    ],
};

const drop3 = {
    button: "Round",
    items: [
        {
            label: "label 0",
            id: 0,
        },
        {
            label: "label 1",
            id: 1,
        },
    ],
};

const drop4 = {
    button: "Team",
    items: [
        {
            label: "label 0",
            id: 0,
        },
        {
            label: "label 1",
            id: 1,
        },
    ],
};

</script>