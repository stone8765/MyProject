<template>
  <div>
    <div> UserName: <input
        type="text"
        v-model="userName"
      ></div>
    <div> Password: <input
        type="password"
        v-model="password"
      ></div>
    <div> <button @click="login">Login</button> </div>
  </div>
</template>

<script>

import { login } from '@/api/login'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
    login () {
      login(this.userName, this.password);
    }
  }
}
</script>

<style>
</style>