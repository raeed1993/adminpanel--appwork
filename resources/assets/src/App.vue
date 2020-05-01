<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: 'Index',
    titleTemplate: '%s - Laravel + Vue.js Demo'
  },
  updated () {
    // Remove loading state
    setTimeout(() => document.body.classList.remove('app-loading'), 1)
  }
}
</script>
