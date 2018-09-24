<template>
  <div id="app">
    <header-view :myFunc2="start"/>
    <menu-left></menu-left>
    <menu-right></menu-right>
    <!-- <img src="./assets/logo.png"> -->
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
    <!-- <h1>{{ product[0] }}</h1> -->
    <ul>
      <!--<li v-for="(result , index) in product">{{ result }} | {{ index }}</li> //ดึงข้อมูลจาก product แล้วเก็บลงใน result-->
    </ul>
    <ul>
      <li v-for="(emp , index) in employee" :key="index">index : {{index}} ชื่อ : {{ emp.name }} อายุ : {{ emp.age }}</li> <!--//ดึงข้อมูลจาก employee แล้วเก็บลงใน emp //key=index หรือ key=emp ก็ไได้--> 
    </ul>
    <input type="text" v-model="newEmp.name"><label>ชื่อ</label><br>
    <input type="number" v-model="newEmp.age"><label>อายุ</label>
    <button @click="addEmp">เพิ่มสมาชิก</button>
    <hr>
    <h1>Todo List</h1>
    <h3>Done : {{ done }}</h3>
    <h3>Not Done : {{ notDone }}</h3>
    <todo-list :todoList="todoList"></todo-list>
    <new-task :todoList="todoList"></new-task>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Header from '@/components/Header.vue';
import TodoList from '@/components/TodoList.vue';
import NewTask from '@/components/NewTask.vue';
import MenuLeft from '@/components/menu-left.vue';
import MenuRight from '@/components/menu-right.vue';

export default {
  data () {
    return {
      newEmp:{
        name: 'A',
        age: 0
      },
      product:['ไทย','พม่า','ลาว','เวียดนาม','อินโด'],
    employee:[
      {name:'ปฏิภาณ',age:25,status:false},
      {name:'สมชาย',age:35,status:true}
    ],
    todoList:[
    { task: 'ตกปลา' , done: false},
    { task: 'เขียนโปรแกรม' , done: false}
  ]
    }
  },
  
  components: {
    'header-view': Header,
    Carousel3d,
    Slide,
    TodoList,
    NewTask,
    MenuLeft,
    MenuRight
  },
  computed:{
    done(){
      return this.todoList.filter(t => t.done).length
    },
    notDone(){
      return this.todoList.filter(t => !t.done).length
    }
  },
  methods:{
    addEmp(){
      this.employee.push({
        name: this.newEmp.name,
        age: this.newEmp.age,
        status: true
      })
      this.newEmp.name= 'A',
        this.newEmp.age= 0
    },
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
  background-color: black;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
