<template>
  <div class="container nes-container with-title is-centered">
    <p class="title">Login</p>
    <form v-on:submit.prevent="post()">
      <div class="nes-field">
        <label>Tu e-mail</label>
        <input type="email" class="nes-input" v-model="email" />
      </div>
      <br />
      <div class="nes-field">
        <label>Contraseña</label>
        <input type="Password" class="nes-input" v-model="password" />
      </div>
      <br>
      <button type="submit" class="nes-btn is-primary">Ingresar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    post() {
      this.$emit('post', { email: this.email, password: this.password });
    },
  },
};
</script>

<style scoped>
.container,
.nes-container {
  background-color: white;
  width: 50%;
  min-width: 375px;
}
</style>