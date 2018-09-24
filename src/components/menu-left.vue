<template>
    <div class="direct">
        <ul class="nav">
            <li class="nav-item__menu"><router-link :to="{ name: 'About' }"  tag="a">HOME</router-link></li>
            <li class="nav-item__menu"><router-link :to="{ name: 'About' }"  tag="a">ABOUT US</router-link></li>
            <li class="nav-item__menu"><a href="what-we-do.php">WHAT WE DO</a></li>
            <li class="nav-item__menu"><a href="portfolio.php">PORTFOLIO</a></li>
            <li class="nav-item__menu"><a href="contact-detial.php">CONTACT</a></li>  
        </ul>
    </div>
</template>
<style>
/*--- Page herder class direct ---------------------*/
div.direct{
    
    position: relative;
    padding-top: 3%;
    padding-left: 3.5%;
    z-index: 100;
}

.nav-item__menu a {
    position: relative;
    margin-left: 65px;
    color: transparent;   
}
.nav {
    display: block;
    position: relative;
}
.nav-item__menu a::before {
    content: 'content';
    position: absolute;
    color: transparent; 
    width: 50px;
    height: 3px;
    background-color:whitesmoke;
    display: block;
    margin-left: 0px;
    margin-top: 13px ;
    
}
.nav-item__menu a:hover:before {
    width: 60px;
}
.nav-item__menu a:hover {
    color: white;
}
a:hover, a:focus, a:active { 
    text-decoration: none; 
}
a.active { color:whitesmoke; }
a.active:before { width: 60px; }
</style>
