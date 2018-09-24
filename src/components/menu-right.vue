<template>
<div class="direct-menu-right">
    <ul class="nav">
        <li><a class="arrow-right-up" href="#"><img src="../assets/home/Icon-arrow.png" alt="Icon-arrow"></a></li>
        <li class="nav-item__menu_right"><a href="home.php">HOME</a></li>
        <li class="nav-item__menu_right"><a href="about.php">ABOUT US</a></li>
        <li class="nav-item__menu_right"><a href="what-we-do.php">WHAT WE DO</a></li>
        <li class="nav-item__menu_right"><a href="portfolio.php">PORTFOLIO</a></li>
        <li class="nav-item__menu_right"><a href="contact-detial.php">CONTACT</a></li>
        <li><a class="arrow-right-down" href="#"><img src="../assets/home/Icon-arrow.png" alt="Icon-arrow"></a></li>
    </ul>
</div>
</template>
<style scoped>
/*---Page herder class direct-menu-right----------------------------------------------------------------------*/
div.direct-menu-right{
    position: fixed;
    right: 0px;
     padding-top: 5.2%; 
    z-index: 100;
}
.nav-item__menu_right a {
    position: relative;
    margin-left: 5px;
    color: transparent; 
    font-size: 0.5vw;  
    cursor: pointer;
}
.nav-item__menu_right a:before {
    border: 1px solid white;
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color:whitesmoke;
    display: block;
    margin-top: 5px ; 
    cursor: pointer;
}
.nav-item__menu_right a:hover:before {
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: -4px ; /*ตำแหน่งจุดเมื่อชี้*/
    margin-top: 0px;   /*ต้องเท่ากับคลาส a.active:before*/
}
.nav-item__menu_right a:hover {
    cursor: pointer;
    color: white;
}

.nav-item__menu_right a.active:before { 
    cursor: pointer;
    background-color: black;
    width: 15px;
    height: 15px; 
    margin-left: -4px ; /*ตำแหน่งจุดเมื่อactive*/
    margin-top: 0px;  /*ต้องเท่ากับ a:hover:before*/
}
.arrow-right-up img{
    position: absolute;
    right: 77%;
    width: 35%;
    margin-top: -40px;
}
.arrow-right-down img{
    position: absolute;
    right: 77%;
    width: 35%;
    transform:rotate(180deg);
    margin-top: 20px;
}
</style>

