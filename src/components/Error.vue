<template>
  <div class="error"  v-show="show">

        <div class=" nes-balloon from-right"  @click="show = !show">
          <p> {{ message }} </p>
        </div>
        
        <div></div><div></div>

      <div class="character">
        <i class="nes-charmander" @click="show = !show"></i>
      </div>
  </div>
</template>

<script>
    export default {
      
      data(){
        return{
          show: false,
          message: '',
        }
      },
      methods: {
        showError(message){
          this.message = message;
          this.show = true;
        },
      }
    }
</script>

<style scoped>
  .error{
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: auto auto;
    position: absolute;
    right:0;
    z-index: 2;
  }

</style>