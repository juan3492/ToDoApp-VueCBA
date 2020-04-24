<template>
  <div>
    <div class="task">
      <div class="nes-container is-rounded">
        <div class="row">
          <div class="col">
            <p @click="Task.edit=true" v-if="!Task.edit">{{Task.task}}</p>
            <textarea class="nes-textarea" v-else v-model="Task.task" cols="40" rows="10"></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col-md-11">
            <label v-if="!Task.edit">
              <input type="checkbox" class="nes-checkbox" v-model="Task.complete" v-on:change="complete" />
              <span>Completada?</span>
            </label>
            <button class="nes-btn is-warning" v-else @click="edit">Terminar de editar</button>
          </div>
          <div class="col">
            <button class="nes-btn is-error" @click="remove">x</button>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    complete(){
       this.$emit('complete');
    },
    edit(){
      this.Task.edit = false
      this.$emit('edit');
    },
    remove() {
      this.$emit('remove');
    },
  },
};
</script>
  
<style lang="scss" scoped>
</style>