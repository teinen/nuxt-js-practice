<template>
  <div class="container">
    <p><button @click="showLoginError">Notify me!</button></p>
    <p>Home - <nuxt-link to="/about">About</nuxt-link></p>

    <!-- <div class="left">
      <h2><nuxt-link to="/">Players</nuxt-link></h2>
      <ul class="players">
        <li v-for="user in users" :key="user.id">
          <nuxt-link :to="'/'+user.id">{{ user.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <nuxt-child :key="$route.params.id"/>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  notifications: {
    showLoginError: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'info'
    }
  },
  async asyncData ({ env }) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return { users: env.users }
  }
}
</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.players li a:hover {
  color: orange;
}
</style>
