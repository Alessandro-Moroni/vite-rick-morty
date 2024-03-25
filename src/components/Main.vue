<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="text-center my-5 container">
    <button @click="store.counter++" class="btn btn-primary mb-5">Incrementa contatore</button>
    <input class="form-control" type="text" v-model="store.mainTitle">

    <div class="row row-cols-4 mt-4">
      <Card v-for="card in this.store.cardList" :key="card.id" class="mb-5"/>
  
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>