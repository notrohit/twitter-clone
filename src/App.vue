<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav component-->
    <SideNav />

    <!-- Router View based on corresponding router-link -->
    <router-view></router-view>  
    
    <!-- trending component-->
    <Trending />
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'
import Trending from './components/Trending.vue'

export default {
  name: 'app',
  components: {
    SideNav,
    Trending
  },
  data() {
    return {
      id: 'home',
    }
  },
}
</script>
