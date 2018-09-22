<template>
    <button @click="myFunc(text)">{{ text }}</button>
</template>
<script>
export default {
    props:{
        text: { //ตัวแปรที่เป็น property ที่ผูกไว้ที่อีกหน้านึง ต้องเอามาเขียนในนี้ให้หมด <MyComponent :text="msg1"/>
      type: String
        }
    },
    methods: {
        myFunc (text) {
            alert(text)
        }
    }
}
</script>

