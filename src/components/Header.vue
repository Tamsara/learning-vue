<template>
    <!-- <div>
        <h1>Hello Vue.js</h1>
        <ul>
            <li>
                <router-link to="/foo">Go to Foo</router-link>
            </li>
            <li><router-link to="/Bar">Go to Bar</router-link></li>
            <li><button @click="myFunc2()">555+</button></li>
        </ul>
    </div> -->
    <div class="headerbar">
    <b-navbar toggleable="md" type="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"><img src="../assets/about/logo-small.png" alt="BV"></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" ><img id="Icon-call" src="../assets/about/Icon-call.png" title="090-6698968" alt="Icon-call">
          <b-tooltip target="Icon-call" placement="bottom">
            090-6698968
          </b-tooltip>
        </b-nav-item>
        <b-nav-item href="#">
          <a v-b-modal.modal-center><img src="../assets/about/Icon-message.png" alt="Icon-message"></a>
          <b-modal id="modal-center" centered hide-header hide-footer>
            <h5>HIER OUR TEAM FOR YOUR PROJECT</h5>
            <P>The standard chunk of Lorem lpsum used since the 1500s is reproduced</P>
            <form @submit.stop.prevent="handleSubmit">
              <b-form-input type="text"
                            placeholder="Name"
                            v-model="name"></b-form-input>
              <b-form-input type="text"
                            placeholder="E-mail"
                            v-model="Email"></b-form-input>
              <b-btn @click="show=false">
                Send
              </b-btn>
            </form>
          </b-modal>
        </b-nav-item>
        <b-nav-item href="#">TH / EN</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>

</template>
<script>

export default {
    // props:{
    //     myFunc2: {
    //         type: Function
    //     }
    // }
}
</script>
<style>
.headerbar {
    padding-top: 2%;
    padding-right: 1.3%;
    padding-left: 3.5%;
}
.navbar{
    padding: 0px;
}
</style>


