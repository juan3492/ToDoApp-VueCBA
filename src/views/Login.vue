<template>
  <div class="login-bg">
    <Header />
    <Error ref="error" :error="error" />
    <div class="login">
      <LoginForm v-on:post="login($event)" />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import Header from '../components/Header';
import Error from '../components/Error';
import firebase from 'firebase';

export default {
  components: {
    LoginForm,
    Header,
    Error,
  },
  data() {
    return {
      error: '',
    };
  },
  methods: {
    login(data) {
      if (data.email === '' || data.password === '') {
        this.error =
          'Faltan datos! Por favor, intentalo de nuevo. eehh digo "charmander"';
        this.$refs.error.showError(this.error);
      } else {
        this.$refs.error.show = false;
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
          .then(user =>{
            console.log(user.email)
            this.$router.push({name: 'tasks'})
          }).catch(err =>{
            this.$refs.error.showError(err.message + 'digooo "charmander"')
          })
      }
    },
  },
};
</script>

<style scoped>
.login-bg {
  height: 100%;
  background-image: url(../assets/login-background.gif);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.login {
  padding-top: 10%;
}
</style>