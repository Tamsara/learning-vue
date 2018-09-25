<template>
    <div> 
        <div class="img-map"><img src="@/assets/about-timeline/BG-map.png" alt=""></div>
    <div class="img-smoke"><img src="@/assets/about-timeline/smoke.png" alt=""></div>
    <div class="img-smoke2"><img src="@/assets/about-timeline/smoke.png" alt=""></div>
    
<div id="content-about-timeline">
  <h3>OUR JOURNEY</h3>
 <div class="row">
  <ul class="timeline">
    <li class="event" data-date="2012">
        <p>We ware a part of TWIN SYNERGY who 's design and develop<br> 
            Website and Application included software under client 's requirement.</p>
    </li>
    <li class="event" data-date="2013-2014">
        <p>We expanded developer ' team and more then under requirement,<br>we can idea and created</p>    
    </li>
    <li class="event" data-date="2015">
        <p>We created our product "KICKDUDES" , an application for football community.<br>We got the winner Thailand ICT Award 2015</p>    
    </li>
    <li class="event" data-date="2015-2016">
        <p>We got manychance to worked with big companies on behalf of supporter <br>and consultant team for them marketin . We provided tools and innovation.</p>    
    </li>
    <li class="event" data-date="2016">
        <p>" KICKDUDES" had approved again by Thailand ICT Award 2016 from 2 prizes <br>"E-Community" and "Start Up" a successful from our research andndeveloper team.</p>
    </li>
    <li class="event" data-date="2016">
        <p>We started to " Media provider" included hardware , software and innovative.</p>
    </li>
    <li class="event" data-date="2017">
        <p>First step to First State ... We started to " Media Agency " from a partnership<br> with " Koa-cha" who 's the own concession of ARL (Airport Rail Links)</p>
    </li>
    <li class="event" data-date="2017">
        <p>We founded " First State Marketing Co.,LTD " on May 2017. We will be provide<br> digital media and innovation only.</p>
    </li>
  </ul>
 </div>
    <div class="img-our-journey"><img src="@/assets/about-timeline/OUR-JOURNEY.png" alt=""></div>
</div>
            
    <a class="btn btn-outline-light  btn-whychoose" href="why-choose-us.php" role="button">WHY CHOOSE US</a>
    </div>
</template>
<script>
export default {
    methods:{
        setheighthistoryline() {
        alert('0438752')
            }
    },
    beforeMount(){
    this.setheighthistoryline()
 },
}
</script>


<style>
div.img-map img{
    position: fixed;
    width: 55%;
    left: 0%;
    top: 45%;
}
div.img-smoke img{
    position: fixed;
    width: 55%;
    height: auto;
    right: 200px;
    top: 2%;

}
div.img-smoke2 img{
    position: fixed;
    opacity: 0.5;
    width: 35%;
    height: auto;
    left: 150px;
    top: 50%;
 
}
div.img-our-journey img{
    position: absolute;
    margin-left: 1%;
    max-width: 40%;
    bottom: 0%;
}
.btn-whychoose{
    position: relative;margin-top: 5%;margin-bottom: 5%;left: 5%;border-radius: 50px;opacity: 0.7;
}
/*page about timeline*/
  #content-about-timeline{
      position: relative;
      margin-top: -10%;
  }
  #content-about-timeline h3{
    text-align: center;
    color: whitesmoke;
  }
  /* Timeline */
  .timeline {
  margin-top: 50px;
    border-left: 4px solid #ffffff;
    color: rgba(255, 255, 255, 0.8); 

    margin-left: 49%;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.6em;
    font-size: 1.03em;
    padding-left: 50px;
    list-style: none;
    text-align: left;
    max-width: 45%;
    
  }
  .timeline .event {
    position: relative;
    top: -10px;
    margin-bottom: 40px;
  }
  .timeline .event:last-child{
    margin-bottom: 0px;
  }
  .timeline .event:before,
  .timeline .event:after {
    position: absolute;
    display: block;
    top: 0;
  }
  .timeline .event:before {
    left: -223.5px;
    color: white;
    content: attr(data-date);
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
    font-family: 'Saira', sans-serif;
  }
  .timeline .event:after {
    left: -59.25px;
    background: white;
    height: 4px;
    width: 15px;
    content: "";
    top: 7px;
  }
</style>
