<template>
  <div class="app">
    <header class="container">
      <span class="h3">TODO App</span>
      <span>-</span>
      <span class="nes-text is-error">Primera etapa</span>
    </header>
    <Form 
      v-on:post="addTask($event)" />
    <br />

    <div class="container nes-container with-title task-list" v-show="tasks.length > 0">
      <p class="title">Tareas</p>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :Task="task"
        :index="index"
        v-on:remove="deleteTask(index)"
      />
    </div>
  </div>
</template>

<script>  
import 'nes.css/css/nes.min.css';
import Task from './components/Task';
import Form from './components/Form';

export default {
  name: 'App',
  components: {
    Form,
    Task,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      console.log(task)
      this.tasks.push(task);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask() {
      console.log('holaa');
    },
  },
};
</script>

<style>
header {
  margin-bottom: 1%;
}

.nes-container {
  word-wrap: break-word;
}
</style>
