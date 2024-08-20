<template>
    <main id="main" class="grid grid-cols-1 md:grid-cols-12 gap-4 px-3 py-2 max-w-[1380px] grow">
        <div id="LeftSide" class="col-span-1 md:col-span-3">
            <slot name="leftSide" />
        </div>
        <div id="RouterView" class="col-span-2 md:col-span-9">
            <slot name="center" />
        </div>
    </main>
</template>