<template>
  <div>
    <input type="text" v-model="task">
    <button @click="addNewTask" >Add new task</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: ''
    }
  },
  props: ['todoList'],
  methods: {
    addNewTask () {
        if (this.task) {
            this.todoList.push({
            task: this.task,
            done: false
      })
       this.task = ''
       // console.log(newTask)
        }
    }
  }
}
</script>