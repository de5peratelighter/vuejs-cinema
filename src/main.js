import './style.scss'
import Vue from 'vue'

import moment from 'moment-timezone'
moment.tz.setDefault("UTC")
Object.defineProperty(Vue.prototype, '$moment', { get() {return this.$root.moment}})

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { checkFilter, setDay } from './util/bus'
const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() {return this.$root.bus} })

import VueRouter from 'vue-router'
import routes from './util/routes' 
Vue.use(VueRouter)

const router = new VueRouter({ routes })

import Tooltip from './util/tooltip'
Vue.use(Tooltip)

new Vue({
    el: '#app',
    data  : {
        genre: [],
        time: [],
        movies : [],
        moment,
        day : moment(),
        bus
    },
    // methods : {
    //     checkFilter (category, title, checked) {
    //         if (checked) {
    //             this[category].push(title)
    //         } else {
    //             let index = this[category].indexOf(title)
    //             if (index > -1) {
    //                 this[category].splice(index,1)
    //             }
    //         }
    //     }
    // },
    // components: {
        // MovieList as an template
        //
        // 'movie-list' : {
        //     template:  `<div id="movie-list">
        //                     <div v-for="movie in filteredMovies" class="movie"> {{movie.title}} </div>
        //                 </div>`,
        //     data () {
        //         return { 
        //             movies : [
        //                 {title : 'one', genre: genres.CRIME},
        //                 {title : 'two', genre: genres.COMEDY},
        //                 {title : 'three', genre: genres.COMEDY}
        //             ]
        //         }
        //     },
        //     props: ['genre', 'time'],
        //     methods : {
        //         moviepassesGenreFilter(movie) {
        //             if (!this.genre.length) {
        //                 return true 
        //             } else {
        //                 return this.genre.find(genre => movie.genre === genre)
        //             }
        //         }
        //     },
        //     computed: {
        //         filteredMovies () {
        //             return this.movies.filter(this.moviepassesGenreFilter)
        //         }
        //     }
        // },
        // MovieFilter as an template
        // 'movie-filter' : {
        //     data() {
        //         return {
        //             genres
        //         }
        //     },
        //     template:  `<div id="movie-filter">
        //                     <h2>Filter results</h2>
        //                     <div class="filter-group">
        //                         <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
        //                     </div>
        //                 </div>`,
        //     methods: {
        //         checkFilter (category, title, checked) {
        //             this.$emit('check-filter', category, title, checked)
        //         }
        //     },
        //     components: {
        //         'check-filter' : {
        //             data () {
        //                 return {
        //                     checked : false
        //                 }
        //             },
        //             props: ['title'],
        //             template: 
        //                 `<div v-bind:class="{'check-filter' : true, 'active' : checked}" v-on:click="checkFilter">
        //                     <span class="checkbox"></span>
        //                     <span class="check-filter-title">{{title}}</span>
        //                 </div>`,
        //             methods : {
        //                 checkFilter () {
        //                     this.checked = !this.checked
        //                     this.$emit('check-filter','genre', this.title, this.checked);
        //                 }
        //             }
        //         }
        //     }
        // }
    // },
    created () {
        this.$http.get('/api').then(response => {
            this.movies = response.data
        })
        // below allows sending data without following the hierarchy
        this.$bus.$on('check-filter', checkFilter.bind(this))
        this.$bus.$on('set-day',  setDay.bind(this))
    },
    router 
})


