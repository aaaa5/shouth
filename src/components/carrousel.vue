<template>
  <Carousel :perPage="1" :navigationEnabled="true" :perPageCustom="[[768, 1], [1024, 3]]">
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Ashley</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Ashley</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Ashley</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Ashley</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Ashley</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </slide>
    <slide>
     <div class="testimonial relative  p-10 lg:max-w-xs max-w-sm mx-auto">
        <h3>Ashley</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </slide>
  </Carousel>
</template>

<script>
import {Carousel,Slide} from 'vue-carousel'

export default {
  data() {
    return {
      
     }
  },
  components: {
    Carousel,
    Slide
  }
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
