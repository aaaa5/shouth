<template>
  <Layout class="startpage">
    <section id="startslide" class="startslide h-screen w-full bg-top bg-cover flex items-center">  
      <div class="container intro-container text-center mx-auto mt-10  lg:max-w-lg rounded-lg">
        <div class="intro-logo rounded-lg bg-blue   p-3 px-4 pb-2 inline-block br-2"><g-image src="~/assets/img/banner-white.png" width="200" fill="cover"/></div>
        <!---
        <h1 class=" text-white  uppercase block mt-10 ">Get rapid relief of 
          <span
            class="txt-rotate text-white monserat mt-2 mb-16 block  text-5xl uppercase"
            data-period="2000"
            data-rotate='[ "Depression", "Anxiety", "ADD/ADHD" ]'></span>
        </h1>
        -->
        <div class="intro-buttons -my-4">
          <a class="mr-5 text-center t inline-block rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white w-auto" href="#services">Services</a>
          <a class="text-center inline-block  bg-white rounded py-2 px-4 hover:bg-blue-light hover:text-white text-blue-dark w-auto" href="#footer">Contact us</a>
        </div>        
      </div>
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
    <section id="testimonials" class="py-16 bg-grey-lighter">
      <div class="container mx-auto">
        <h2 class="border-b-2 border-grey-light pb-1 text-4xl">Testimonials</h2>
        <carrousel />
      </div>      
    </section>
    <section id="services" class="py-16">
      <div class="container mx-auto">
        <h2 class="border-b-2 border-grey-lighter pb-1 text-4xl">Services</h2>
        <div class="serviceBox flex flex-wrap flex-row items-stretch text-center justify-center pt-6">
          <!--
          <div class="service relative lg:max-w-xs p-1 lg:p-3">
            <g-image class="rounded" src="~/assets/img/depression.jpg"/>
            <h3 class="serviceName bg-blue rounded px-1 py-3 text-white w-4/5 overflow-hidden mx-auto">Depression/Anxiety</h3>
          </div>
          -->
          <div v-for="{ node } in $static.allServicePage.edges" :key="node._id" class="service relative lg:max-w-xs p-1 lg:p-3">
                      <router-link :to="node.path" class=" block mt-8 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4">
                        <g-image class="rounded" :src="node.image"/>
                        <h3 v-html="node.title" class="serviceName bg-blue rounded px-1 py-3 text-white w-4/5 overflow-hidden mx-auto" />
                      </router-link>
          </div>
         </div>
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
        }
      }
    }
  }
</static-query>

<script>

import carrousel from '~/components/carrousel.vue'


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
    carrousel
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
.VueCarousel {
  margin:4rem 0.5rem;

}
.startpage .serviceName {
  transform: translateY(-50%);
  margin-top: -0.5rem;
  font-size: 1.5rem;
}

.scrolled .intro-buttons {
  transform: rotateX(-90deg);
}

.scrolled .intro-logo {
  transform: rotateX(90deg);
}

.intro-logo, .intro-buttons{
      transform: rotateX(0deg);
      transition:all 0.3s ease;
}

.scrolled .intro-container {
  opacity: 0;
}

.intro-container {
background: rgba(0, 61, 111, 0.5);
position: relative;
transition:all 0.5s ease;
opacity:1;
}


.intro-message{
  background: rgba(0, 16, 29, 0.33);
}
.intro-logo {
  margin-top: -2.8rem;
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
