<template>
  <div class="container nes-container with-title task-form">
    <p class="title">Escriba aquí su tarea</p>
    <form v-on:submit.prevent="post()">
      <textarea v-model="currTask" class="nes-textarea"></textarea>
      <button type="submit" class="nes-btn is-success">Agregar Tarea</button>
    </form>
    <p
      class="nes-text is-error mt-2"
      v-show="showError"
    >Alto ahí, rufian. Primero debes escribir la tarea.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currTask: '',
      showError: false,
    };
  },
  methods: {
    post() {
      if (this.currTask !== '') {
        const task = {
          task: this.currTask,
          complete: false,
          edit: false,
        };
        this.$emit('post', task);
        this.currTask = '';
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>