<template>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold block ">Explore</h1>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <div v-for="explore in exploring" :key="explore.handle" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="w-full">
          <div class="flex items-center space-between w-full ">
            <p class="font-semibold"> {{ explore.name }} </p>
            <p class="text-sm text-dark ml-2"> LIVE </p>  
          </div>
          <p class="py-2">
            {{ explore.msg }}
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
      id: 'msgs',
      exploring: [
        { name: 'COVID - 19',  msg: 'Covid in India'},
        { name: 'IND VS AUS', msg: 'India bats first '},
        { name: 'ISRO Launch', msg: 'ISRO launches CMS-01'},
        { name: 'Zayn Malik',  msg: 'ZAYN is coming to India'},
        { name: 'COVID - 19',  msg: 'Covid in India'},
        { name: 'IND VS AUS', msg: 'India bats first '},
        { name: 'ISRO Launch', msg: 'ISRO launches CMS-01'},
        { name: 'Zayn Malik',  msg: 'ZAYN is coming to India'}
      ],
    }
  },
}
</script>