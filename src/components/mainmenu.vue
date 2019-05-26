<template>
	 <nav id="mainmenu" class="flex relative items-left justify-between flex-wrap pt-3 pb-2 lg:pt-6 lg:pb-6">
          <div class="" id="logo">
            <g-link to='/' class="block float-left"><g-image src='~/assets/img/banner.png' fit="cover" class="" /></g-link>
          </div>
          <div class="phone">
            <a class="call-us absolute text-3xl z-10" href="tel:516-295-4867">516-295-4867</a>
          </div>
          <div class="block lg:hidden">
            <div class="hamburger-container ">
							<button id="hamburger" class="menu-button z-50" @click="onClick()"></button>
						</div> 
          </div>

          <div class="w-full block fixed flex w-screen flex-wrap lg:relative pin lg:pin-none bg-blue lg:bg-transparent flex-grow lg:flex lg:items-center lg:w-auto z-40" id="menuContainer">
            <div class="text-sm mx-auto w-full lg:flex-grow lg:flex lg:justify-end lg:mt-0 uppercase text-xl lg:text-base">
              <ul class="level_1 p-0">
                <li class="relative servicesLink block lg:w-auto">
                  <a  class="nav__link  block mt-16 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" href="#">Services</a>
                  <ul class="level_2 serviceContainer lg:absolute">
                    <li class="block" v-for="{ node } in $static.allServicePage.edges" :key="node._id">
                      <router-link :to="node.path" class="nav__link block lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4">
                        <span class="lg:text-grey-darkest no-underline" v-html="node.title"/>
                      </router-link>
                    </li>
                  </ul>
                </li>              
                <li v-for="{ node } in $static.allStaticPage.edges" :key="node._id">
                  <router-link :to="node.path" class="nav__link block lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4">
                    <span v-html="node.title"/>
                  </router-link>
                </li>
                <li>
                    <g-link  class="nav__link block lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4" to="/blog">Blog</g-link>
                </li>
              </ul>
              


            </div>
            <div class="menu-phone lg:hidden bottom-0 absolute bg-blue-darker p-2 pl-4 w-full">
                <a class="call-us relative text-3xl" href="tel:516-295-4867">516-295-4867</a>
            </div>
          </div>
        </nav> 
</template>

<static-query>
   query StaticPage ($static: Int) {
    allStaticPage (page: $static) {
      edges {
        node {
          _id
          path
          title
        }
      }
    }
    allServicePage (page: $static) {
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

.menu-phone {
  bottom:0;
}

.servicesLink:hover .serviceContainer {
  display: block;
}


.serviceContainer {
  left:0;
  display: none;
}


.staticPage header.scrolled:before {
    display:none;
}
 
#mainmenu li {
    display: inline-block;
    list-style-type: none;
}

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
    background-image: url(/img/phone-icon.png);
    content: '';
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    float: left;
    margin-right: 1rem;
    background-size: cover;
    background-color: rgba(255, 255, 255, .58);
    border-radius: 50%;
    padding: rem;
    border: 0.1rem solid #fff;
}

.scrolled .call-us:before{
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
  .serviceContainer {
    display: none;
    padding: 1rem;
    background:rgba(255, 255, 255, 0.66);
    text-align: center;
    
    width: 150px;
    text-align: left;
    border-bottom-right-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    
  }

  .scrolled .serviceContainer {
    background: #fff;
  }

   .serviceContainer li {
     display: block !important;
   }

  .serviceContainer li a {
    font-size: 0.8rem;
  }
  

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
  #menuContainer {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='744' height='744' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23579cd1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2381add1'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  }

  #mainmenu .level_1>li>a {
    font-size: 2rem;
    padding:0.5rem 0;    
    
  }
  #mainmenu .level_1>li {
    display: block;
  }
  li.servicesLink {
    width: 100%;
  }
  ul.level_2 li {
    width: 100%;
    text-align: center;    
    padding: 0.3rem 0rem;
  }

  ul.level_2 {
    padding-left:0;
    margin: 1rem 0;
  }
  .serviceContainer {
    display: block;
  }
  .nav__link {
    width: 100%;
    text-align: center;
  }
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
