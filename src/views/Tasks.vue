<template>
  <div class="app">
    <Header />    
    <TaskForm 
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
//import db from './main.js'

import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';


export default {
  name: 'App',
  components: {
    Task,
    TaskForm,
    Header
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
