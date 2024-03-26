<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <div class="text-center my-5 container">
    <h1 class="my-3">{{ store.mainTitle }}</h1>
  
    <div class="row row-cols-4">
      
  
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
      <datalist id="datalistOptions">
        <option
          v-for="(listName, index) in this.store.nameList"
          :key="index"
          :value="listName">
        </option>
       
        
      </datalist>

      <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Select status
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>

      <button type="button" class="btn btn-info">Search</button>
      <button type="button" class="btn btn-warning">Reset</button>
    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>