<template>
  <div class="home-side-block">
    <div class="home-side-title">
      <slot name="title" />
    </div>
    <div class="home-side-header">
      <slot name="header" />
    </div>
    <div class="home-side-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-side-block {
  position: relative;
  margin: 0 50px;
}

.home-side-title {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin: 0 auto;
  font-size: 1.5rem;
}
</style>
