<template>
  <div class="app">
    <header class="container">
      <span class="h3">TODO App</span>
      <span>-</span>
      <span class="nes-text is-error">Primera etapa</span>
    </header>

    <div class="container nes-container with-title task-form">
      <p class="title">Escriba aqui su tarea</p>
      <form v-on:submit.prevent="addTask">
        <textarea v-model="currTask" class="nes-textarea"></textarea>
        <button type="submit" class="nes-btn is-success">Agregar Tarea</button>
      </form>
      <p class="nes-text is-error mt-2" v-show="showError"> 
        Alto ahi, rufian. Primero debes escribir la tarea.
      </p>
    </div>
    <div>

      <br>

      <div class="container nes-container with-title task-list"
          v-show="tasks.length > 0"  
      >
        <p class="title">Tareas</p>
        <div class="task" v-for="(task, index) in tasks" :key="index">
          <div class="nes-container is-rounded">
            <div class="row">
              <div class="col">
                <p @click="task.edit=true" v-if="!task.edit">{{task.task}}</p>
                <textarea class="nes-textarea" v-else v-model="task.task" cols="40" rows="10"></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-md-11 ">
                <label v-if="!task.edit">
                  <input type="checkbox" class="nes-checkbox" v-model="task.complete"/>
                  <span>Completada?</span>
                </label>
                <button class="nes-btn is-warning" v-else @click="task.edit=false">Terminar de editar</button>
              </div>
              <div class="col">
                <button class="nes-btn is-error" @click="deleteTask(index)">x</button>
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'nes.css/css/nes.min.css';

export default {
  name: 'App',
  data() {
    return {
      currTask: '',
      tasks: [],
      error: '',
      showError: false,
    };
  },
  methods: {
    addTask() {
      if (this.currTask !== '') {
        this.tasks.push({task: this.currTask, complete: false, edit: false});
        this.currTask = '';
        this.showError = false
      } else {
        this.showError = true;
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    editTask(){
      console.log("holaa")
    }
  },
};
</script>

<style>

header {
  margin-bottom: 1%;
}


.nes-container{
  word-wrap: break-word;
}




</style>
