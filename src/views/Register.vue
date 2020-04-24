<template>
  <div class="register-bg">
    <Header />
    <Error ref="error" />
    <div class="register">
      <RegisterForm   v-on:post="register($event)" />
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';
import Header from "@/components/Header";
import Error from '@/components/Error';

import firebase from 'firebase';
    export default {
      components: {
        RegisterForm,
        Header,
        Error
      },
      methods: {
        register(data){
          if(data.email === '' || data.password === '' || data.repeatpassword === ''){
            this.$refs.error.showError('Te faltan datos para poder registrarte. eeehhh digo "chaaaarmander"')
          }else if(data.password !== data.repeatpassword){
            this.$refs.error.showError('Las contraseñas no coinciden. eeehhh digo "chaaaarmander"')
          }else{
            this.$refs.error.show = false
             firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
              .then(() =>{
                this.$router.push({name: 'tasks'})
              }).catch(err =>{
                this.$refs.error.showError(err.message + '. ehhh digo "charmmmm"')
              })
          }
        }
      }
    }
</script>

<style scoped>
.register-bg {
  height: 100%;
  background-image: url(../assets/register-background.gif);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.register {
  padding-top: 10%;
}
</style>