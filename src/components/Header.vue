<template>
  <nav class="navbar  " style="background-color: transparent;">
  <a class="navbar-brand" href="#">
    <span class="h3">TODO App</span>
    <span> - </span>
    <span class="nes-text is-error">Segunda etapa</span>
    <span v-if="user"> - Bienvenido {{ user.email }} </span>
  </a>

  <ul class="nav" v-if="!user">
    <li class="btn nav-item">
      <router-link class="button nes-btn is-success" to="login"> Log In</router-link>
    </li>
    <li class="btn nav-item">
      <router-link class="button nes-btn is-success" to="Register" > Register </router-link>
    </li>
  </ul>

  <ul class="nav" v-else>
    <li class="btn nav-item">
      <button class="nes-btn is-success" @click="logout()" > Log out </button>
    </li>
  </ul>

</nav>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      user: null,
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.user = user
      } else{
        this.user = null
      }
    })
  }
}
</script>

<style scoped>
  nav, .navbar{
    background-color: black;
  }

  .bt{
    margin-right: 20 x;
  }
  
</style>