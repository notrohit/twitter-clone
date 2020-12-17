<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav component-->
    <SideNav />
    <!-- Tweets Component -->
    <!-- <Tweets /> -->
    <router-view></router-view>  
    <!-- <router-link to="/side">Side</router-link> -->
      <hr />
    <!-- trending component-->
    <Trending />
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'
// import Tweets from './components/Tweets.vue'
import Trending from './components/Trending.vue'

export default {
  name: 'app',
  components: {
    SideNav,
    // Tweets,
    Trending
  },
  data() {
    return {
      id: 'home',
    }
  },
}
</script>
