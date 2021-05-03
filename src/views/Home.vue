<template>
  <div class="home container">
    <nav>
      <div class="logo">
        <router-link class="" to="/"
          ><h1 class=""><span class="">Vue</span>deo</h1>
        </router-link>
      </div>
      <div class="search">
        <form class="search-form" @submit.prevent="searcher()">
          <input
            type="text"
            placeholder="Search for a movie"
            id="searchField"
            v-model="search"
            autofocus
          />

          <button
            class=""
            id="searchButton"
            type="submit"
            value="GO"
          >
            GO
          </button>
        </form>
      </div>
    </nav>
    <section id="search-results">
      <div class="movie-cards" v-for="movie in movieInfo" :key="movie.imddbID">
        <div class="movie-poster">
          <router-link
            :to="{
              name: 'MovieInfoPage',
              params: {
                id: movie.imdbID,
                searchRecap: searchTerm,
              },
            }"
          >
            <img class="" :src="movie.Poster" alt="test" />
            
          </router-link>
        </div>
        <div class="short-info">
          <h3>{{ movie.Title }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue"
//API key in separate file
import cstm from "@/cstm.js"

export default {
  name: "Home",

  setup() {
    const search = ref("")
    const movieInfo = ref({})
    const searchTerm = ref("")
    //Simple fetch
    const searcher = () => {
      fetch(`http://www.omdbapi.com/?apikey=${cstm.myKey}&s=${search.value}`)
        .then((res) => res.json())
        .then((data) => {
          movieInfo.value = data.Search

          console.log(data.Search)
          console.log(movieInfo.value)
          console.log(search.value)
          searchTerm.value = search.value
          //Clear the search field after submit
          search.value = ""
          console.log(`After clear ${searchTerm.value}`)
        })
    }
    return {
      search,
      movieInfo,
      searcher,
      searchTerm
    }
  },
}
</script>

<style></style>
