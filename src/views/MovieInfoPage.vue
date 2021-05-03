<template>
  <div class="movie-info-page container">
    <nav class="">
      <div class="logo">
        <router-link class="" to="/"
          ><h1 class=""><span class="">Vue</span>deo</h1>
        </router-link>
      </div>
      <div class="new-search">
        <router-link class="" to="/"> &#8592;</router-link>
      </div>
    </nav>
    <section class="movie-info">
      <div class="movie-details">
        <div class="movie-poster">
          <img :src="movie.Poster" alt="test" />
        </div>
        <div class="general-info">
          <div class="title">
            <h4>{{ movie.Title }}</h4>
          </div>

          <div class="movie-numbers">
            <ul>
              <li><span>Year:</span>{{ movie.Year }}</li>
              <li><span>Raring:</span>{{ movie.Rated }}</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <div class="movie-specs">
        <p class="genre-list">
          <span class="genre">Genre: </span> {{ movie.Genre }}
        </p>
      </div>
      <div class="plot">
        {{ movie.Plot }}
      </div>
    </section>
    <section class=" related-movies-list">
      <div class="related-movies">
        <div
          class="related-movie-poster"
          v-for="item in movieInfo"
          :key="item.imdbID"
        >
          <router-link
            @click="getInfo()"
            :to="{
              name: 'MovieInfoPage',
              params: { id: item.imdbID },
            }"
          >
            <img :src="item.Poster" alt="" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue"
//importing useRoute to pass params from the router link on the results page
import { useRoute } from "vue-router"
//API key
import cstm from "@/cstm.js"

export default {
  inheritAttrs: false,
  name: "MovieInfoPage",

  setup() {
    const movie = ref({})
    const routedId = useRoute()
    const movieInfo = ref({})
    const searchTerm = routedId.params.searchRecap
    //Call the function to fetch movie details and previous search results. This function is called by a link to load the new  selection movie details
    getInfo()

    function getInfo() {
      //fetch detailed movie info by using movie ID passed as param in link
      console.log(
        `Movie ID, passed through router link params: ${routedId.params.id}`
      )
      fetch(
        `http://www.omdbapi.com/?apikey=${cstm.myKey}&i=${routedId.params.id}&plot=full`
      )
        .then((res) => res.json())
        .then((data) => {
          movie.value = data
          console.log(data)
        })
    }
    //Get the list of movies in search results using searched word passed as param in link
    console.log(
      `Search value, passed through router link params: ${routedId.params.searchRecap}`
    )
    fetch(
      `http://www.omdbapi.com/?apikey=${cstm.myKey}&s=${routedId.params.searchRecap}`
    )
      .then((res) => res.json())
      .then((data) => {
        movieInfo.value = data.Search
      })
    return { movie, movieInfo, searchTerm }
  },
}
</script>

<style></style>
