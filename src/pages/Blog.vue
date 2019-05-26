<template>
  <Layout class="servicePage bloglistPage">
    
    <div class="container mx-auto relative">
      <div class="absolute text-center" id="whiteLogo">
        <g-link to='/' class="staticLogo inline-block p-2 bg-blue rounded lg:mt-3"><g-image src='~/assets/img/banner-white.png' fit="cover" class="" width="150"/></g-link>
      </div>
    </div>
    
    <div class="headingTitle flex content-end flex-wrap justify-center ">
        <h1 class="text-white uppercase font-bold bg-blue px-5 py-8 rounded -mb-10">Blog</h1>
    </div>
    

    <div class="container mx-auto mb-16 mt-20">
      <div class="lg:flex">
        <div class="w-full lg:w-3/4">
          <ul>
            <li class="mb-8" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
              <div class="lg:float-left lg:mr-5 max-w-xs overflow-hidden"><g-image class="rounded-lg" :src="node.image" width="100"/></div>
              <div class=" clearfix">
                <g-link :to="node.path">
                  <h3 class="text-blue mb-2" v-html="node.title"/>
                </g-link>
                  <span class="text-grey-dark text-sm mb-2 block" v-html="node.date"/>
                <div v-html="node.description"/>
                <g-link :to="node.path">
                  <h4 class="text-blue mt-5">Read more</h4>
                </g-link>
              </div>         
            </li>
          <Pager class="blog-pagination text-lg text-blue-dark" :info="$page.allBlogPost.pageInfo"/>
          </ul>
        </div>

        <div class="right_block w-full mt-20 lg:w-1/4 lg:mt-0">
          <div class="flex flex-wrap justify-left p-2 pb-5 bg-grey-lighter rounded-lg">
            <h3 class="w-full text-white text-center -mt-8 "><span class="bg-blue py-1 px-5 rounded ">Services</span></h3>
            <div v-for="{ node } in $static.allServicePage.edges" :key="node._id" class="service block md:w-1/2 mt-3 mb-1 px-2">
                      <router-link :to="node.path" class="block mt-3 lg:block lg:mt-0 text-grey-lighter hover:text-white ">
                        <g-image class="rounded" :src="node.image"/>
                        <h4 v-html="node.title" class="serviceName rounded px-1 py-3 text-blue w-4/5 overflow-hidden mx-auto text-center uppercase" />
                      </router-link>
            </div>
          </div>
          
        </div>   
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (perPage: 5, page: $page) @paginate{
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          image
        }
      }
    }
  }
</page-query>

<static-query>
   query StaticPage ($static: Int) {
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
import { Pager } from 'gridsome'

export default {
   components: {
    Pager
  }
}
</script>

<style>
.blog-pagination a {
    border-radius: 50%;
    color: #fff;
    margin-right: 0.5rem;
    padding: 0.5rem 1.2rem!important;
    background: #3490dc;
    line-height: initial;
    display: inline-block;
    /* width: auto; */
    /* height: auto; */
}


ul {
  padding: 0;
  list-style-type: none;
}


</style>