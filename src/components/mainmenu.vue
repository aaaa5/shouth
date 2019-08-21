<template>
	 <nav id="mainmenu" class="flex relative items-left justify-between flex-wrap pt-3 pb-2 ">
          <div class="" id="logo">
            <g-link to='/' class="block float-left"><g-image src='~/assets/img/banner.png' fit="cover" class="" /></g-link>
          </div>
          <div class="phone">
            <a class="call-us absolute text-3xl z-10" href="tel:516-295-4867">516-295-4867</a>
          </div>
          <div class="block">
            <div class="hamburger-container ">
							<button id="hamburger" class="menu-button z-50" @click="onClick()"></button>
						</div> 
          </div>

          <div class="w-full block fixed flex w-screen flex-wrap pin  bg-blue flex-grow z-40" id="menuContainer">
            <div class="text-sm mx-auto w-full  uppercase text-xl">
              <ul class="level_1 p-0">
                <li class="relative servicesLink block text-center border-blue border-solid border-2 mb-10">
                  <!-- <a  class="nav__link  block mt-16  text-grey-lighter hover:text-white mr-4" href="#">Services</a> -->
                  <h1 class="font-bold text-blue-dark inline-block p-2 bg-blue -mt-4">Services</h1>
                  <ul class="level_2 serviceContainer">
                    <li class="block " v-for="{ node } in $static.allServicePage.edges" :key="node._id">
                      <router-link :to="node.path" class="nav__link block  text-grey-lighter hover:text-white ">
                        
                        <span class=" no-underline" v-html="node.title"/>
                      </router-link>
                    </li>
                  </ul>
                </li>              
                <li v-for="{ node } in $static.allStaticPage.edges" :key="node._id">
                  <router-link :to="node.path" class="nav__link block  text-grey-lighter hover:text-white mr-4">
                    <span v-html="node.title"/>
                  </router-link>
                </li>
                <li>
                    <g-link  class="nav__link block  text-grey-lighter hover:text-white mr-4" to="/blog">Blog</g-link>
                </li>
              </ul>
              


            </div>
            <div class="menu-phone  bottom-0 absolute text-center p-2 pl-4 w-full">
                <a class="call-us relative text-3xl" href="tel:516-295-4867">516-295-4867</a>
            </div>
          </div>
        </nav> 
</template>

<static-query>
   query StaticPage ($static: Int) {
    allStaticPage (page: $static, sortBy: "position", order: ASC) {
      edges {
        node {
          _id
          path
          title
        }
      }
    }
    allServicePage (page: $static, , sortBy: "position", order: ASC) {
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
        var el3 = document.getElementById('headingTitle');
        if (window.scrollY > 30) {
          el.classList.add('scrolled');
          el2 ? el2.classList.add('scrolled') : false;
          el3 ? el3.classList.add('scrolled') : false;
        }else{
          el.classList.remove('scrolled');
          el2 ? el2.classList.remove('scrolled'): false;
          el3 ? el3.classList.remove('scrolled'): false;
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
  max-width: 500px;
  margin-top: 0 !important;
  left:0;
}

#mainmenu h1 {
    display: block;
    width: 14rem;
    margin: 0 auto;
    margin-top: -2rem;
    color: #fff;
    padding-top: 0.9rem;
}


.staticPage header.scrolled:before {
    display:none;
}

#mainmenu ul {
opacity: 0;
transition: 0.3s ease;
transition-delay: 0;
transform: scale(0.7);
padding: 1rem;
}

#mainmenu.active ul {
opacity: 1;
transition: 0.3s ease;
transition-delay: 0.2s;
transform: scale(1);
}

#mainmenu li {
    display: inline-block;
    list-style-type: none;
}

#menuContainer .call-us {
  text-indent: initial !important;
  position: relative !important;
  left: 0 !important;
  
  line-height: 4rem;
  
}

#menuContainer .call-us:before {
  display: inline-block;
  float: none;
  background-color: #3490dc !important;
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
    background-image: url(/img/phone-icon-inv.png);
    content: '';
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    float: left;
    margin-right: 1rem;
    background-size: cover;
    border-radius: 50%;
    padding: rem;
    
}

.scrolled .call-us:before{
  background-color: #3490dc;
  background-image: url("/img/phone-icon-inv.png");
}





#logo{
  opacity: 0;
  transition: all 0.3s ease;
}




@media screen and (max-width: 992px){
  .phone .call-us {
    text-indent: -9999px;
  }
  .scrolled .phone .call-us {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@media screen and (min-width: 993px){
  .scrolled .phone .call-us {
    transform: translateX(-100%);
    opacity: 0;
  }
}

/*
@media screen and (min-width: 993px){
  .serviceContainer {
    display: none;
    padding: 1rem;
    background:#fff;
    text-align: center;
    text-align: left;
    min-width: 200px;
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
*/


  #menuContainer>div:nth-child(1) {
    display: FLEX;
    justify-content: center;
    align-items: center;
  }

/*
  #menuContainer {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='744' height='744' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23579cd1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2381add1'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  }
*/
#menuContainer a {
  display: inline-block;
  width: auto;
}

  #menuContainer {
    text-align: center;
    background: #87bcea;
background: -moz-linear-gradient(-45deg,  #87bcea 0%, #539fe1 21%, #0a77d5 50%, #73b1e7 76%, #d0e4f7 100%);
background: -webkit-linear-gradient(-45deg,  #87bcea 0%,#539fe1 21%,#0a77d5 50%,#73b1e7 76%,#d0e4f7 100%);
background: linear-gradient(135deg,  #87bcea 0%,#539fe1 21%,#0a77d5 50%,#73b1e7 76%,#d0e4f7 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87bcea', endColorstr='#d0e4f7',GradientType=1 );

  }





  #mainmenu .level_1>li>a, #mainmenu .level_1>li>a span {
    font-size: 1.6rem;
    padding: .5rem 0;
    font-weight: 600;
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


  .serviceContainer {
    display: block;
  }
  .nav__link {
    width: 100%;
    text-align: center;
  }
  .scrolled .phone .call-us:before {
  background-color: #3490dc;
  background-image: url("/img/phone-icon-inv.png");
  border: .1rem solid #3993dd;
}
  
  .call-us{
    color: #fff;
    left:15px;
  }

.scrolled .call-us{
    text-indent: -9999px;
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
    transform: translateX(100%);
    transition: all 0.2s ease;
    transition-delay: 0.2s ease;
  }
  .active #menuContainer{
    transform: translateX(0);
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
