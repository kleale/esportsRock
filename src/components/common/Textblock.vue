<template>
  <div class="textBlock text-base p-12">
    <h2><slot name="header-extra" /></h2>
    <p><slot /></p>
    <slot name="header-footer" />
  </div>
</template>

<style scoped lang="scss">
.textBlock {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  border-radius: 5px;
  background-image: url(/img/BlockText.jpg);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: #000e17;
  background-size: cover;
  color: rgba(255, 255, 255, 0.3);

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 21px;
    line-height: normal;
  }
  p {
    line-height: normal;
  }
}
</style>
