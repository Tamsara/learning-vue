<template>
  <div id="app">
    <header-view :myFunc2="start"/>
    <img src="./assets/logo.png">
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
    <button @click="start()">start</button>
    <button @click="set()">set</button>
    <button @click="finish()">finish</button>
    <button @click="AlertToggle()">swal</button>
    <div>
		<carousel-3d>
	    <slide :index="0">
	      Slide 1 Content
          <img src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" alt="">
	    </slide>
	    <slide :index="1">
	      Slide 2 Content
          <img src="http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg" alt="">
	    </slide>
        <slide :index="2">
	      Slide 3 Content
          <img src="https://lh3.googleusercontent.com/l6JAkhvfxbP61_FWN92j4ulDMXJNH3HT1DR6xrE7MtwW-2AxpZl_WLnBzTpWhCuYkbHihgBQ=w640-h400-e365" alt="">
	    </slide>
	    <slide :index="3">
	      Slide 4 Content
          <img src="https://lh3.googleusercontent.com/aR34MxRBretppyADbJcfqIZp-LraO1ELhk00lTZw0Q7MF1ebUKZeggeQkjBuZCCmYRSYNzr8=w640-h400-e365" alt="">
	    </slide>
	  </carousel-3d>
	</div>
    
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Header from '@/components/Header.vue';
export default {
  components: {
    'header-view': Header,
    Carousel3d,
    Slide
  },
  methods:{
    AlertToggle () {
			this.$swal(
                'The Internet?',
                'That thing is still around?',
                'question'
                )
		},
    start () {
        this.$Progress.start()
    },
    set (num) {
        this.$Progress.set(num)
    },
    increase (num) {
        this.$Progress.increase(num)
    },
    decrease (num) {
        this.$Progress.decrease(num)
    },
    finish () {
        this.$Progress.finish()
    },
    fail () {
        this.$Progress.fail()
    },
    test(){
      this.$Progress.start()

      this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
      .then((response) => {
          this.$Progress.finish()
      }, (response) => {
          this.$Progress.fail()
      })
    }
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
