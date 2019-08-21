<template>
  <Layout class="servicePage bloglistPage">
    
    <div class="container mx-auto relative">
      <div class="absolute text-center" id="whiteLogo">
        <g-link to='/' class="staticLogo inline-block p-2 bg-blue rounded lg:mt-3"><g-image src='~/assets/img/banner-white.png' fit="cover" class="" width="150"/></g-link>
      </div>
    </div>
    
   <div class="heading-cover absolute w-full"  style="background-image': url('') "></div>
    <div id="headingTitle" class="headingTitle flex align-middle flex-wrap content-center">
        <div class="container mx-auto z-10"><h1 class="text-white uppercase mt-16 text-4xl text-center lg:text-left lg:text-5xl">BLOG</h1></div>
    </div>
    

    <div class="container mx-auto mb-16 mt-20 listBlogBody">
      <div class="lg:flex ">
        <div class="w-full lg:w-3/4">
          <ul class="lg:pr-10">
            <li class="mb-8" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
              <div class="lg:float-left lg:mr-5 overflow-hidden"><g-image class="rounded-lg" :src="node.image" width="100"/></div>
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

        <div class="right_block w-full mt-20 lg:w-1/4 lg:mt-10">
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
    allBlogPost (perPage: 5, page: $page, sortBy: "date", order: DESC) @paginate{
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          _id
          title
          date (format: "MMMM D, YYYY", locale: "us")
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
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Blog - South Shore Neuropsychiatric Center',
    meta: [{
        name: 'description',
        content: 'Blog. South Shore Neuropsychiatric Center offers ADHD, Depression, Anxiety Treatments in Hewlett, Long Island. Top Psychiatrist offers TMS Therapy in Long Island.'
      },
      {
        name: 'keywords',
        content: 'psychiatrist long island, top psychiatrist, tms therapy, adhd, depression, anxiety, substance abuse, adult attention deficit disorder, hewlett, long island, new york'
      }]
  },
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

.listBlogBody img {
  height: auto;
  width: 300px;
}

@media  (max-width: 991px) {
  .listBlogBody img {
    max-width: 100% !important;
    width: 100%;
  }
}

ul {
  padding: 0;
  list-style-type: none;
}


</style>