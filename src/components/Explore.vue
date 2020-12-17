<template>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Explore</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>


      <div v-for="follow in following" :key="follow.handle" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="w-full">
          <div class="flex items-center space-between w-full ">
            <p class="font-semibold"> {{ follow.name }} </p>
            <p class="text-sm text-dark ml-2"> LIVE </p>  
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'explore',
  data() {
    return {
      id: 'tweets',
      following: [
        { name: 'COVID - 19',  tweet: 'Covid in India'},
        { name: 'IND VS AUS', tweet: 'India bats first '},
        { name: 'ISRO Launch', tweet: 'ISRO launches CMS-01'},
        { name: 'Zayn Malik',  tweet: 'ZAYN is coming to India'},
        { name: 'COVID - 19',  tweet: 'Covid in India'},
        { name: 'IND VS AUS', tweet: 'India bats first '},
        { name: 'ISRO Launch', tweet: 'ISRO launches CMS-01'},
        { name: 'Zayn Malik',  tweet: 'ZAYN is coming to India'}
      ],
    }
  },
}
</script>