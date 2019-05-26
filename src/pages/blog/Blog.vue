<template>
  <Layout class="servicePage">
    <div class="container mx-auto relative">
      <div class="absolute text-center" id="whiteLogo">
        <g-link to='/' class="staticLogo inline-block p-2 bg-blue rounded lg:mt-3"><g-image src='~/assets/img/banner-white.png' fit="cover" class="" width="150"/></g-link>
      </div>
    </div>
    <div class="headingTitle flex content-end flex-wrap justify-center ">
        <h1 class="text-white uppercase font-bold bg-blue px-5 py-8 rounded -mb-10">{{ $page.blogPost.title }}</h1>
    </div>
    <div class="container mx-auto mb-16 mt-10">
      <ul>
        <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
          <g-link :to="node.path">
            <h2 v-html="node.title"/>
          </g-link>
          <span v-html="node.date"/>
          <div v-html="node.description"/>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<style>

</style>