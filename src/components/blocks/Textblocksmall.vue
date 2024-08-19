<template>
  <div class="textBlock text-sm p-6 font-light text-white rounded-md">
    <h2 class="text-lg leading-tight font-medium pb-5">
      <slot name="header-extra" />
    </h2>
    <slot />
    <slot name="header-footer" />
  </div>
</template>

<style scoped lang="scss">
.textBlock {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(/src/assets/img/blocktextbg.jpg);
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-color: #000e17;
  background-size: cover;

  p {
    line-height: normal;
  }
}
</style>
