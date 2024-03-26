<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store,
        nameSearch: '',
      }
    },
    methods:{
      searchName(){
        this.store.queryParams={
          offset: 0,

          name: this.nameSearch
        }
        this.$emit('searchName')
      }
    }
    
  }
</script>


<template>
  <div class="text-center my-5 container">
    <h1 class="my-3">{{ store.mainTitle }}</h1>
  
    <div class="row row-cols-4">
      
  
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        v-model.trim="nameSearch"
        @keyup.enter="searchName">
      <datalist id="datalistOptions">
        <option
          v-for="(listName, index) in this.store.nameList"
          :key="index"
          :value="listName">
        </option>
       
        
      </datalist>


    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>