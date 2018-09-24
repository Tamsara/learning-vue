<template>
  <ul>
    <li v-for="(todo, index) in todoList" :key="index"> <!--  key ต้องไม่ซ้ำกัน เช่นใช้ ID ,แนะนำให้กำหนด key เพื่อ ไม่ให้เรียงข้อมูลซ้ำกัน-->
      {{ todo.task }}
      <button @click="updateToDone(index)" :disabled="todo.done ">Done</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    updateToDone (index) {
      this.todoList[index].done = true
    }
  }
}

</script>