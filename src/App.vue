<script>
import axios from 'axios';
import {store} from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store,

      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params:store.queryParams
        })
        .then(result => {
          this.store.cardList = result.data.results
          console.log(this.store.cardList);
        })
        .catch(error => {
          console.log(error);
        })
      },
      getAllNames(){
        axios.get(this.store.nameUrl)
        .then(res =>{
          this.store.nameList = res.data.results.map(item => item.name);
          console.log(this.store.nameList);
        })
      },
      getStatus(){
        axios.get(this.store.statusUrl)
        .then(res =>{
          this.store.statusList = [...new Set(res.data.results.map(item => item.status))];
          console.log(this.store.statusList);
        })
      },
      getSpecies(){
        axios.get(this.store.speciesUrl)
        .then(res =>{
          this.store.speciesList = [...new Set(res.data.results.map(item => item.species))];
          console.log(this.store.speciesList);
        })
      },
    },
    mounted(){
      this.getApi()
      this.getAllNames()
      this.getStatus()
      this.getSpecies()
    }
  }
</script>

<template>
  <Header @searchName="getApi" />
  <Main />
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>