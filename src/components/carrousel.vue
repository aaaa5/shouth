<template>
<ClientOnly>
  <Carousel :perPage="1" :navigationEnabled="true" :perPageCustom="[[768, 1], [1024, 3]]">
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Marcin N.</h3>
        <p>Very down to earth, knows what he's talking about. Listens. Has adjusted my medication to change my life. Best doc I've seen and I had seen a couple.</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Howard P.</h3>
        <p>Dr Fruitman is a saint.  I have been battling depression and some type of bipolar my whole life.  After trying and failing on many different occasions with different medications and doctors,  i came accross Dr Fruitman and his ketamine therapy.  It has been a life saver.  Not only has the ketamine been extremely successful but the medication plan is working!!!!   I'm not fully healed or jumping through hoops but my life is manageble and consistent and that i am very thankful for.  Also the staff  Jenn and Michelle are extremely caring and helpful.  Thank you so much for helping save my life</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>James G.</h3>
        <p>Dr Fruitman is very professional, he is the first doctor to actually listen to what I am trying to tell him and not just give medication based off a diagnosis.  He made sure to include all aspects of my condition were addressed.  I have never felt understood by a psychiatrist until Dr. Fruitman</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Jennifer M.</h3>
        <p>I have been seeing Michelle for a few weeks now, she has really taken the time to understand my past in order to help me get to where I want to be in the future.  The office is very calming, and she has done a terrific job in helping me move forward on some projects I have been ignoring for quite sometime now.</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Regina F.</h3>
        <p>My daughter has been seeing Michelle, LMHC for a few months, Since working with Michelle and Dr. Fruitman, my daughter has received accommodations at school which has helped tremendously, in addition, they helped me find tutors in all subjects.  My daughter has been receiving higher grades and has a better overall sense of self worth since starting counseling and medication management. We are very appreciative. </p>
      </div>
    </slide>
  </Carousel>
</ClientOnly>
</template>

<script>

export default {
    name: 'carrousel',
    components: {
      Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    },
}
</script>

<style>
.testimonial:before {
  position: absolute;
  content:'';
  width:50px;
  height: 50px;
  background-repeat: no-repeat;
  background-image: url("/img/quotes.png");
  display: block;
  overflow: hidden;
}

.testimonial:before{
background-position: top left;
right:2rem;
top:0.5rem;
}


.testimonial {
    background: #fff;
}

@media all and (min-width: 992px){


.testimonial {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    margin: 10px;
}
}

.VueCarousel-navigation-button {
  color: #3490dc;
}

</style>
