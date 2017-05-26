<template>
    <div id="detail" v-if="mov">
        <movie-item v-bind:movie="mov">
            <div class="movie-details">
                <p class="movie-genre">{{ mov.Genre}}</p>
                <p class="movie-plot">{{ mov.Plot}}</p>
                <table>
                    <tr><td>Release date:</td><td>{{mov.Released}}</td></tr>
                    <tr><td>Running time:</td><td>{{mov.Runtime}}</td></tr>
                    <tr><td>Director:</td><td>{{mov.Director}}</td></tr>
                    <tr><td>Cast:</td><td>{{mov.Actors}}</td></tr>
                </table>
            </div>
        </movie-item>
        <div class="home">
            <router-link v-bind:to="{ name : 'home'}">Back to results</router-link>
        </div>
    </div>
</template>
<script>
import MovieItem from './MovieItem.vue'
    export default {
        props: ['movies'],
        computed : {
            mov () {
                let movie = this.movies.find(el => el.id === this.$route.params.id)
                return movie ? movie.movie : null
                
            }
        },
        components : {
            MovieItem
        }
    }
</script>