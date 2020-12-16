<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav component-->
    <SideNav />
    <!-- Tweets Component -->
    <Tweets />
    <!-- trending component-->
    <Trending />
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'
import Tweets from './components/Tweets.vue'
import Trending from './components/Trending.vue'

export default {
  name: 'app',
  components: {
    SideNav,
    Tweets,
    Trending
  },
  data() {
    return {
      id: 'home',
    }
  },
}
</script>
