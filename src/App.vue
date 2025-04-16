<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>
<!-- bootstrap.bundle.min.js (필수: Popper 포함됨) -->

<script>
import VueHeader from "@/components/VueHeader.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: 'App',
  components: {
    Header: VueHeader,
    Footer: VueFooter,
  }
}
</script>

<style>

body {
  background-color: #000;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

#app {
  background-color: #000;
  position: relative;
  top: 72px;
}


</style>
