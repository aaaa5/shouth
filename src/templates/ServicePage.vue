<template>
  <Layout class="servicePage">
    <div class="container mx-auto relative">
      <div class="absolute text-center" id="whiteLogo">
        <g-link to='/' class="staticLogo inline-block p-2 bg-blue rounded lg:mt-3"><g-image src='~/assets/img/banner-white.png' fit="cover" class="" width="150"/></g-link>
      </div>
    </div>
    
    <!--
    <div id="startImage" class="relative z-10 article">
      <g-image :src="$page.servicePage.image" fit="cover" height="100" />
    </div>
    -->
    <div class="headingTitle flex content-end flex-wrap justify-center ">
        <h1 class="text-white text-center uppercase font-bold bg-blue px-5 py-8 rounded -mb-10">{{ $page.servicePage.title }}</h1>
    </div>
    <div class="container mx-auto mb-16 mt-10">
      <div class="lg:flex">
        <div class="w-full lg:w-3/4 overflow-hidden">
        <g-image class="rounded lg:float-left mt-16 lg:mr-10 mb-1 lg:mb-10 w-full lg:w-1/3" :src="$page.servicePage.image"/>
          <div class="content mt-10 lg:pr-10" v-html="$page.servicePage.content" />
        </div>
        <div class="right_block w-full mt-20 lg:w-1/4 lg:mt-0">
          <div class="flex flex-wrap justify-left p-2 bg-grey-lighter rounded-lg mt-20">
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

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.servicePage.seotitle,
      meta: [{
        name: 'description',
        content: this.$page.servicePage.seodescription
      },
      {
        name: 'keywords',
        content: this.$page.servicePage.seokeywords
      }]
    }
  }
}
</script>

<page-query>
  query servicePage ($path: String!) {
    servicePage (path: $path) {
      title
      content
      image
      seotitle
      seokeywords
      seodescription
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