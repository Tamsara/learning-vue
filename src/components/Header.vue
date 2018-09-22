<template>
    <div>
        <h1>Hello Vue.js</h1>
        <ul>
            <li>
                <router-link to="/foo">Go to Foo</router-link>
            </li>
            <li><router-link to="/Bar">Go to Bar</router-link></li>
            <li><button @click="myFunc2()">555+</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        myFunc2: {
            type: Function
        }
    }
}
</script>
