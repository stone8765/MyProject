<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/home/about">About</router-link>
    <router-view />
  </div>
</template>

<script>

// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
