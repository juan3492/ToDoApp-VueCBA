<template>
  <div class="app">
    <Header />
    <TaskForm v-on:post="addTask($event)" />
    <br />
    <div class="container nes-container with-title task-list">
      <p class="title">Filtrar por</p>
      <div class="row">
        <div class="col" align="center">
          <button class="nes-btn is-primary" @click="filter='all'">Todas las tareas</button>
        </div>
        <div class="col" align="center">
          <button class="nes-btn is-success" @click="filter='complete'">Tareas finalizadas</button>
        </div>
        <div class="col">
          <button class="nes-btn is-erros" @click="filter='uncomplete'">Tareas pendientes</button>
        </div>
      </div>
    </div>
    <br />
    <div
      class="container nes-container with-title task-list"
      v-show="tasks.length > 0"
      v-if="ready"
    >
      <p class="title">Tareas</p>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :Task="task"
        :index="index"
        v-on:remove="deleteTask(task.id)"
        v-on:edit="editTask(task)"
        v-on:complete="completeTask(task)"
        v-show="filterTask(task)"
      />
    </div>
    <div class="container nes-container with-title task-list" v-else>
      <p class="title">Tareas</p>
      <div class="row justify-content-center align-self-center">
        <img class="spinner" src="../assets/Nyan-cat.webp" alt />
      </div>
      <div class="row justify-content-center align-self-center">
        <p class="h1">Cargando...</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'nes.css/css/nes.min.css';

import db from '../main';
import firebase from 'firebase';

import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';

export default {
  name: 'App',
  created() {
    this.getTask();
  },
  components: {
    Task,
    TaskForm,
    Header,
  },
  data() {
    return {
      tasks: [],
      ready: false,
      filter: "all"
    };
  },
  methods: {
    filterTask(task) {
      if (this.filter === 'complete') {
        return task.complete
      } else if (this.filter === 'uncomplete') {
        return !task.complete
      } else {
          return true
      }
    },
    async addTask(task) {
      this.ready = false;
      const user = firebase.auth().currentUser.uid;
      await db.collection('tasks').add({
        user_id: user,
        task: task.task,
        edit: task.edit,
        complete: task.complete,
      });
      this.getTask();
    },
    async completeTask(task) {
      await db
        .collection('tasks')
        .doc(task.id)
        .set({ complete: task.complete, ...task });
    },
    async editTask(task) {
      await db
        .collection('tasks')
        .doc(task.id)
        .set({ task: task.task, ...task });
    },
    async getTask() {
      try {
        this.ready = false;
        const uid = firebase.auth().currentUser.uid;
        const snapshot = await db
          .collection('tasks')
          .where('user_id', '==', uid)
          .get();
        let tasksUpdated = [];
        let task = null;
        snapshot.forEach(doc => {
          task = doc.data();
          task['id'] = doc.id;
          tasksUpdated.push(task);
        });
        this.tasks = tasksUpdated;
        this.ready = true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id) {
      this.ready = false;
      await db
        .collection('tasks')
        .doc(id)
        .delete()
        .then(() => {
          this.getTask();
        })
        .catch(err => {
          console.log(err.data);
        });
    },
  },
};
</script>

<style>
.app {
  background-image: url('../assets/tasks-bg.gif');
  background-attachment: fixed;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  min-height: 100%;
}

.nes-container {
  word-wrap: break-word;
  background-color: white;
}

.spinner {
  width: 50%;
  margin: auto;
}
</style>
