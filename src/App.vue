<template>
  <v-app>
    <TopNav />
      <v-content class="mx-4 mb-4">
        <router-view>


        </router-view>
      </v-content>
    <!-- <BottomNav/> -->
  </v-app>
</template>

<script>

import BottomNav from '@/components/BottomNav'
import TopNav from '@/components/TopNav'

 
export default {
  name: 'App',
  components: {
    TopNav,
    BottomNav,
  },
  data () {
    return {
      //
    }
  }
}
</script>
