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
          params:{
            num: 20,
            offset: 0,
            language: 'en',
          }
        })
        .then(result => {
          this.store.cardList = result.data.results
          console.log(this.store.cardList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>