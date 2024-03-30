<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store,
        nameSearch: '',
        statusSearch: '',
        speciesSearch: '',
      }
    },
    methods:{
      searchName(){
        this.store.queryParams={
          offset: 0,

          name: this.nameSearch,
          status: this.statusSearch,
          species: this.speciesSearch,
        }
        this.$emit('searchName')
      },
      resetSearch(){
        this.nameSearch = '',
        this.statusSearch = '',
        this.speciesSearch = '',
        this.searchName();
      },
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

      <div class="col">
       <select name="" id="" v-model="statusSearch" @change="searchName">
          <option value="" disabled selected>Select status</option>
          <option value="">Reset status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unkown">Unknown</option>
       </select>

      </div>

      <div class="col">

        <select name="" id="" v-model="speciesSearch" @change="searchName">
          <option value="" disabled selected>Select species</option>
          <option value="">Reset species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>

        </select>

      </div>

      <div class="col button">
        <button type="button" class="btn btn-warning" @click="resetSearch">Reset</button>
      </div>

    </div>
  
  </div>
</template>



<style lang="scss" scoped>
select{
  width: 200px;
}
.btn{
  width: 150px;
}
</style>