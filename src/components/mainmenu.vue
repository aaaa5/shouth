<template>
	 <nav id="mainmenu" class="flex relative items-left justify-between flex-wrap pt-3 pb-2 lg:pt-6 lg:pb-6">
          <div class="" id="logo">
            <g-link :to="{ name: '/' }" class="block float-left"><g-image src='~/assets/img/banner.png' fill="cover" class="" /></g-link>
          </div>
          <div class="">
            <a class="call-us absolute text-3xl " href="tel:516-295-4867">516-295-4867</a>
          </div>
          <div class="block lg:hidden">
            <div class="hamburger-container ">
							<button id="hamburger" class="menu-button z-50" @click="onClick()"></button>
						</div> 
          </div>
          <div class="w-full block fixed flex w-screen flex-wrap lg:relative pin lg:pin-none bg-blue lg:bg-transparent flex-grow lg:flex lg:items-center lg:w-auto z-40" id="menuContainer">
            <div class="text-sm mx-auto lg:flex-grow lg:flex lg:justify-end ml-4 mt-24 lg:mt-0 uppercase text-xl lg:text-base">
              <g-link  class="nav__link block mt-8 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" to="/">Home</g-link>
              <g-link  class="nav__link block mt-8 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" to="/">About</g-link>
              <g-link  class="nav__link block mt-8 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" to="/">Services</g-link>
              <g-link  class="nav__link block mt-8 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" to="/">Mental Health Counseling</g-link>
              <g-link  class="nav__link block mt-8 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" to="/Blog">Blog</g-link>
            </div>
            <div class="lg:hidden absolute bg-blue-darker p-2 pl-4 w-full">
                <a class="call-us relative text-3xl" href="tel:516-295-4867">516-295-4867</a>
            </div>
          </div>
        </nav> 
</template>


<script>

export default {
		name: 'mainmenu',
		methods: {
			onClick() {
				var el = document.getElementById('mainmenu');
				el.classList.toggle('active');
      },
      handleDebouncedScroll (event) {
        var el = document.getElementById('header');
        var el2 = document.getElementById('startslide'); 
        if (window.scrollY > 30) {
          el.classList.add('scrolled');
          el2.classList.add('scrolled');
        }else{
          el.classList.remove('scrolled');
          el2.classList.remove('scrolled'); 
        }
      },
    },
    mounted () {
      window.addEventListener('scroll', this.handleDebouncedScroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleDebouncedScroll);
    }
}


</script>




<style>

#menuContainer .call-us {
  text-indent: initial !important;
  position: relative !important;
  left: 0 !important;
  color: #fff !important;
  line-height: 4rem;
  
}

#menuContainer .call-us:before {
  display: inline-block;
  float: none;
  background-color: #fff !important;
      position: relative;
    top: 0.7rem;
}

.call-us {
  line-height: 2.8rem;
  left:5rem;
  color:#565656;
  margin-top: 2px;
}

.call-us:before {
  background-image: url("/img/phone-icon.png");
  content: '';
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  float: left;
  margin-right: 1rem;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.58);
  border-radius: 0.5rem;
}

.scrolled .call-us:before {
  background-color: #3490dc;
  background-image: url("/img/phone-icon-inv.png");
}

.scrolled .call-us {
  left:220px;
  color: #3490dc !important;
}

.scrolled #logo{
  opacity: 1;
}

#logo{
  opacity: 0;
  transition: all 0.3s ease;
}

#header.scrolled {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.21);
}





@media screen and (min-width: 993px){
  #header img {
    width:100%;
  }

  #header.scrolled img {
    width:70%;
  }

  #header.scrolled #mainmenu {
  padding-top:1rem;
  padding-bottom:0.5rem;
}

#header.scrolled nav a {
  color:#666;
}

}


@media screen and (max-width: 992px){
  .scrolled .call-us:before {
  background-color: #fff;
  background-image: url("/img/phone-icon.png");
}
  
  .call-us{
    text-indent: -9999px;
    left:0;
  }
  #header.scrolled:after {
    position: ABSOLUTE;
    content: '';
    display: block;
    right: 0;
    top: 0;
    height: 100%;
    width: 5rem;
    background: #3490dc;
}

  #header img {
    width:70%;
  }

  #menuContainer{
    transform: translateX(-100%);
    transition: all 0.2s ease;
    transition-delay: 0.2s ease;
  }
  .active #menuContainer{
    transform: translateX(0);
  }
}

#hamburger:hover:before, #hamburger:hover:after {
transform: translateX(10px);
}

#hamburger {
  outline: none;
  overflow: hidden;
}

#hamburger:before, #hamburger:after {
  display: block;
  background: #fff;
  content: '';
  width:50px;
  height: 3px;
  margin-top:10px;
}

#hamburger:after {
  background: #fff;
  width:30px;
  margin-left: 20px;
  transition-delay: 0.1s;
}

.menu-button {
	  width: 50px;
    position: fixed;
    /* margin: 5em auto; */
    display: block;
    background: none;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    right: 0;
    right: 1rem;
    top: 1rem;
}

.nav__link {
    position: relative;
    overflow: hidden;
    padding-bottom: 3px
  }
  .nav__link:hover:after{
    transform:translateX(0%);
  }
  .nav__link:after {
    transform:translateX(-200%);
    position: absolute;
    width: 100%;
    background:#3490dc;
    display: block;
    content: '';
    height: 2px;    
    bottom: 0;
  }

</style>
