	
import { reactive } from 'vue'

export const store = reactive({
  mainTitle: 'Vite Rick & Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardList: [],
  nameUrl: 'https://rickandmortyapi.com/api/character',
  nameList: [],
  statusUrl: 'https://rickandmortyapi.com/api/character/?status',
  statusList: [],
  status: '',
  speciesUrl: 'https://rickandmortyapi.com/api/character/?species',
  speciesList: [],
  species: '',
  queryParams:{
 
  }
})