<template>
    <div>
        <div class="smoke">
        <img src="../assets/about/smoke.png" alt="">
    </div>
    <div class="lamp">
        <img src="../assets/about/lamp.png" alt="">
    </div>

<!--content-->
<div>
    <div class="row">
        <div class="col-12 text-center text-about">         
                    <span>ABOUT</span>
        </div>
    </div>
    <div class="row">
        <div class="col-3 text-detial text-right">     
                <p>Vision :</p>
        </div>
        <div class="col-8 text-detial text-left">    
                <p>เราสร้างสรรค์นวัตกรรมใหม่ และเพิ่มช่องทางด้านโฆษณา เพื่อพัฒนาและให้เกิดประโยชน์สูงสุดกับธุรกิจของลูกค้า</p>
        </div>
    </div> 
    <div class="row">
        <div class="col-3 text-detial text-right">     
                <p>Mision :</p>
        </div>
        <div class="col-8 text-detial text-left">    
                <p>เป็นผู้นำทางด้านการพัฒนา software และ hardware สำหรับสื่อโฆษณาสื่อดิจิทัลครบวงจร</p>
                <div class="text-right  link-box-timeline">
                    แสดงผลเหมือนกันหมด
                     <b-link :to="{ name: 'AboutTimeline'}" class="btn btn-outline-light  link-box">User</b-link>
                    <router-link :to="{ name: 'AboutTimeline' }" class="btn btn-outline-light  link-box" >TIMELINE</router-link>
                    <b-button href="#/AboutTimeline" class="btn btn-outline-light  link-box">I am a Link</b-button>  
                    <a class="btn btn-outline-light  link-box" href="#/AboutTimeline" role="button">&nbsp;&nbsp;&nbsp;TIMELINE&nbsp;&nbsp;&nbsp;</a>
                </div>
        </div>
    </div> 
</div>
<!--end content-->
    </div>
</template>
<style>
/*---page Home , about1 ----background-----------------------------*/
div.smoke img{
    position: absolute;
    left: 70px;
    top: 0px;
    width:50%;
   
}

/*Page about ------------------------------------------------------*/
div.lamp img{
    position: absolute;
    right: 250px;
    top: 0px;
    width:13%; 
}
.text-about{
    font-size: 11vw;color: #4F4F4F;
    padding-bottom: 25px;
}
.text-detial{
    padding-right: 0px;
}
.col-3.text-detial {
    max-width: 20%;
}
 .text-detial p{
     font-size: 18px;
    color: white;
    opacity: 0.6;
    letter-spacing: 0.3pt;
} 
.link-box-timeline{
    margin-top: 80px;
}
.link-box{
   border-radius: 50px;margin-top: 5%;margin-right: 10%; color: whitesmoke;
}
</style>

