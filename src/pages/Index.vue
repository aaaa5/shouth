<template>
  <Layout class="startpage">
    
    <video-bg :sources="['/uploads/water.mp4']" img="/uploads/water.jpg">
    </video-bg>
    <section id="startslide" class="startslide h-screen w-full bg-top bg-cover flex items-center">
      <div class="intro-logo rounded-lg bg-blue   p-3 px-4 pb-2 inline-block br-2"><g-image src="~/assets/img/banner-white.png" width="200" fill="cover"/></div>  
      <div class="container intro-container text-center mx-auto mt-10  lg:max-w-lg rounded-lg">
        
        
        <h1 class=" text-white  uppercase block mt-10 ">Get rapid relief of 
          <span
            class="txt-rotate text-white monserat mt-2 mb-16 block  text-5xl uppercase"
            data-period="2000"
            data-rotate='[ "Depression", "Anxiety", "ADD/ADHD" ]'></span>
        </h1>
        
        <div class="intro-buttons -my-4">
          <a class="serviceButton mr-5 text-center t inline-block rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white w-auto" href="#services">Services</a>
          <a class="contactButton text-center inline-block  bg-white rounded py-2 px-4 hover:bg-blue-light hover:text-white text-blue-dark w-auto" href="#about-us">About us</a>
        </div>        
      </div>
      <div class="arrows"></div>
    </section>
    
    <section class="about-us pt-16 pb-16">
      <div class="container mx-auto">
        <div class="lg:flex">
          <div class="lg:w-2/3 lg:mr-10">
            <h2 class="border-b-2 border-grey-lighter pb-1 text-4xl">About Us</h2>
            <p class=" text-justify lg:text-left">Located in Hewlett Long Island, South Shore Neuropsychiatric Center is committed to a scientific and innovative approach to mental health treatment.</p>
            <p class=" text-justify lg:text-left">We combine innovative TMS  Therapy for Depression and Anxiety  treatments with expert Psychopharmacology and Psychotherapy. In addition to this, Dr Fruitman offers Ketamine treatment for depression. We are dedicated to helping professionals working in Manhattan and Long Island to get rapid relief of their ADD/ ADHD symptoms. Dr. Fruitman offers Buprenorphine/Suboxone outpatient treatment for patients with opiate addiction.</p>
            <p class=" text-justify lg:text-left">South Shore Neuropsychiatric Center believes that the right approach to treatment is to collaborate with all significant sources of treatment and support that are available to a patient, while maintaining a patient-requested level of confidentiality and privacy.</p>
          </div>
          <div class="lg:w-1/3 pt-5 lg:pt-16">
            <g-image src="~/assets/img/ef.jpg" />
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="pb-0">
        <!-- <h2 class="border-b-2 border-grey-lighter pb-1 text-4xl">Services</h2>
        <h3 class="text-center bg-cover bg-fixed text-white mb-0 p-8">SERVICES</h3> -->
        <div class="serviceBox flex flex-wrap flex-row items-stretch text-center justify-center">
          <div v-for="{ node } in $static.allServicePage.edges" :key="node._id" class="service relative w-full lg:w-1/4">
                      <router-link :to="node.path" class=" bg-cover bg-center w-full block lg:inline-block lg:mt-0 text-grey-lighter hover:text-white" v-bind:style="{ backgroundImage: 'url(' + node.image + ')' }">
                        <h3 v-html="node.title" class="serviceName inline-block  rounded" />
                        <p v-html="node.sdesc"></p>
                      </router-link>
          </div>
         </div>
    </section>
    
    <section id="testimonials" class="py-16 bg-grey-lighter  bg-cover bg-fixed">
      <div class="container mx-auto">
        <h3 class="text-center bg-cover bg-fixed mb-0 p-8 uppercase">Testimonials</h3>
        <carrousel />
      </div>      
    </section>
  
  </Layout>
</template>


<static-query>
   query StaticPage ($static: Int) {
    allServicePage (page: $static, sortBy: "position", order: ASC) {
      edges {
        node {
          _id
          path
          title
          image
          sdesc
        }
      }
    }
  }
</static-query>

<script>

import carrousel from '~/components/carrousel.vue'
import VideoBg from 'vue-videobg'


export default {
  metaInfo: {
    title: 'South Shore Neuropsychiatric Center',
    meta: [{
        name: 'description',
        content: 'South Shore Neuropsychiatric Center offers ADHD, Depression, Anxiety Treatments in Hewlett, Long Island. Top Psychiatrist offers TMS Therapy in Long Island.'
      },
      {
        name: 'keywords',
        content: 'psychiatrist long island, top psychiatrist, tms therapy, adhd, depression, anxiety, substance abuse, adult attention deficit disorder, hewlett, long island, new york'
      }]
  },
  components: {
    carrousel,
    VideoBg
  },
  mounted() {
    const gsc = document.getElementById('grecaptchascript');
  if (!gsc) {
    const
    typeScript = document.createElement('script'),
    typeURL = 'type.js';
    typeScript.setAttribute('src', typeURL);
    typeScript.setAttribute('id', 'grecaptchascript');
    document.head.appendChild(typeScript);
    }
    this.methodType()
  },
  methods: {
    methodType:function() {
      var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #3490dc; padding:0; }";
    document.body.appendChild(css);
    }
  }
}
</script>

<style>
#testimonials {
  background-image: url('~@/assets/img/testimonial.jpg');
}

#testimonials>div>h3 { 
  font-size:2.8rem;
}

.startpage .service>a:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0;
    -webkit-transform: translate3d(0,50%,0);
    transform: translate3d(0,50%,0);
    background: -webkit-linear-gradient(top, rgba(93, 125, 190, 0) 0%, rgba(255, 255, 255, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(93, 125, 190, 0)), color-stop(75%, #fff));
    background: -webkit-linear-gradient(top, rgba(93, 125, 190, 0) 0%, #fff 75%);
    background: -o-linear-gradient(top, rgba(93, 125, 190, 0) 0%, #fff 75%);
    background: linear-gradient(to bottom, rgba(93, 125, 190, 0) 0%, #fff 75%);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
}

.startpage .service:hover a:before {
  opacity:1;
}

.startpage #services>h3, #testimonials>h3 {
  font-size:2.8rem;
  background-image: url('~@/assets/img/water.jpg');
}
.startpage .serviceBox a:hover p{
  opacity: 1;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  transition-delay: 0s;
}

.startpage .serviceBox p{
    font-size: 16px;
    line-height: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    width: 100%;
    opacity: 0;
    -webkit-transform: translate3d(0,10px,0);
    transform: translate3d(0,10px,0);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    z-index: 1;
    transition-delay: 0.1s;
}

.startpage .serviceBox a:hover h3{
    -webkit-transform: translate3d(-50%,-50%,0) translate3d(0,-40px,0);
    transform: translate3d(-50%,-50%,0) translate3d(,-40px,0);
    background: rgba(52, 144, 220, 0);
    color: #202020;
    border-radius: 0;
}

.startpage .serviceBox h3{
  color:#fff;
  z-index: 2;
   transition:transform 0.35s ease;
    max-width: 95%;
    min-width: 250px;
    padding:1em;
    position: absolute;
    bottom: 0;
    left: 50%;
    color: #fff;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);
    overflow: hidden;
    background: rgba(52, 144, 220, 1);
    
}

.startpage .service h3:after {
  content:'';
  background: rgba(52, 144, 220, 1);
  position: absolute;
  bottom:0;
  right: 0;
  left: 0;
  top:0;
  z-index: -1;
  transition: all 0.3s ease;
  transform: translateY(100%-53.3333333333px);
  filter:blur(10deg);
  opacity: 0;
  
}

.startpage .service:hover h3:after {
  transform: translateY(100%) translateY(-3px);
  background: rgba(52, 144, 220, 1);
  filter:blur(0px);
  opacity: 1;
 
}

.startpage .serviceBox a{
  position: relative;
  height:35vh;
  min-height: 300px;
  display: block;
}

.startpage .service a:after{
  background: rgba(52, 144, 220, 1);
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  left:0;
  top: 0;transform: translateY(100%);
  background-color: rgba(255, 255, 255, 0);
  z-index: 0;
}

.startpage .service:hover a:after{
 background: rgba(52, 144, 220, 1);
 transform: translateY(0);
 background-color: rgba(255, 255, 255, 0.81);
  transition:all 0.35s ease; 
}

.startpage .scrolled .arrows {
  opacity: 0;
  transform: translate(-50%, 10px);
  transform:scale(0.2);
}

.arrows {
  position: absolute;
  bottom:0;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, 0);
  transform:scale(0.2);
  margin-left:-37px;
  opacity: 1;
  transition: 0.5s ease;
}
.arrows:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.6666666667px solid rgba(255, 255, 255, 0.7);
  border-bottom: 26.6666666667px solid rgba(255, 255, 255, 0.7);
  transform: translate(26.6666666667px, 106.6666666667px) rotate(-45deg);
  animation: arrows 3s linear infinite;
}
.arrows:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.6666666667px solid rgba(255, 255, 255, 0.7);
  border-bottom: 26.6666666667px solid rgba(255, 255, 255, 0.7);
  transform: translate(53.3333333333px, 0px) rotate(-45deg);
  animation: arrows 3s linear infinite -1.5s;
}

@keyframes arrows {
  0% {
    border-left: 26.6666666667px solid rgba(255, 255, 255, 0);
    border-bottom: 26.6666666667px solid rgba(255, 255, 255, 0);
    transform: translate(-13.3333333333px, -53.3333333333px) rotate(-45deg);
  }
  10%, 90% {
    border-left: 26.6666666667px solid rgba(255, 255, 255, 0);
    border-bottom: 26.6666666667px solid rgba(255, 255, 255, 0);
  }
  50% {
    border-left: 26.6666666667px solid rgba(255, 255, 255, 0.7);
    border-bottom: 26.6666666667px solid rgba(255, 255, 255, 0.7);
    transform: translate(-13.3333333333px, 0px) rotate(-45deg);
  }
  100% {
    border-left: 26.6666666667px solid rgba(255, 255, 255, 0);
    border-bottom: 26.6666666667px solid rgba(255, 255, 255, 0);
    transform: translate(-13.3333333333px, 53.3333333333px) rotate(-45deg);
  }
}


.VideoBg {
  position:absolute !important;
  width: 100%;
}

.VueCarousel {
  margin:4rem 0.5rem;

}
.startpage .serviceName {
  font-size: 1.5rem;
}


.scrolled .intro-logo {
opacity: 0;
transform: translate(-50%, -50px);
}



/*
.scrolled .intro-buttons {
  transform: rotateX(-90deg);
}

.scrolled .intro-logo {
  transform: rotateX(90deg);
}

.scrolled .intro-container {
  opacity: 0;
}

*/

.intro-logo, .intro-buttons{
      transform: rotateX(0deg);
      transition:all 0.3s ease;
}

.scrolled .intro-container h1 {
  opacity: 0;
}

 .intro-container h1 {
   transform: translateY(0);
  transition:all 0.5s ease;
  opacity:1;
}

.scrolled .intro-container {
  transform: translateY(50px);
  opacity: 0;
  transition-delay: 0.2s;
}

.intro-container {
  transition-delay: 0.2s;
  transition: .2s;
  background: rgba(0, 61, 111, 0.24);
  opacity: 1;
  position: relative;
}

.intro-buttons a{
 transition: .2s ease;
 transform: translateY(0);
 opacity: 1;
}

.intro-buttons a:nth-child(1) {
  transition-delay: 0.1s;
}

.scrolled .intro-buttons a {
  transform: translateY(50px);
  opacity: 0;
}

.intro-message{
  background: rgba(0, 16, 29, 0.33);
}
.intro-logo {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: 0;
    background: rgba(0, 61, 111, .24);
}
.txt-rotate {
    height: 5rem;
    overflow:hidden;
}
.txt-rotate>.wrap {
      height: 5rem;
      font-family: 'Montserrat', sans-serif; 
      letter-spacing: 0.3rem;
      font-size: 5rem;
}


@media screen and (max-width: 991px) {
  .txt-rotate {
    height: 3rem;
}
.txt-rotate>.wrap {
      height: 3rem;
      font-size: 2.6rem;
      letter-spacing: initial;
}
.intro-container {
  max-width: 90%;
}
}
  
</style>
