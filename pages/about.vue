<template>
  <div class="container">
    <h1 class="title">Another Page</h1>
    <p><nuxt-link to="/" class="button is-medium is-info hvr-wobble-vertical">Another button</nuxt-link></p>
    <p><nuxt-link to="/">Back home</nuxt-link></p>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
}
</script>
