<template>
  <div class="layout">
    <header class="header fixed w-full z-50" id="header">
      <div class="mainmenuContainer">
        <mainmenu />
      </div>      
    </header>
    <slot/>
    <footerMy/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="~/assets/css/main.css"></style>


<script>
import mainmenu from '~/components/mainmenu.vue'
import footerMy from '~/components/footerMy.vue'

export default {
  components: {
    mainmenu,
    footerMy
  },
    updated() {
      var el = document.getElementById('mainmenu');
      if (el.classList.contains('active')) { el.classList.toggle('active');   }
		}
}
</script>









