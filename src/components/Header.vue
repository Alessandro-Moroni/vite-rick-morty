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
      
      <div class="col">

        <input
          
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

      <div class="dropdown col">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select status
        </button>
        <ul class="dropdown-menu" style="">
          <li v-for="(listStatus, index) in this.store.statusList" :key="index" :value="listStatus"><a class="dropdown-item" href="#">{{ listStatus }}</a></li>
        </ul>
      </div>

      <div class="dropdown col">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select species
        </button>
        <ul class="dropdown-menu" style="">
          <li v-for="(speciesList, index) in this.store.speciesList" :key="index" :value="speciesList"><a class="dropdown-item" href="#">{{ speciesList }}</a></li>
        </ul>
      </div>

    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>