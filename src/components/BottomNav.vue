<template>
    <!-- <v-bottom-nav fixed value="true"> -->
   
    <v-bottom-nav
      fixed 
      value="true"
    >
      <v-btn
        color="teal"
        text
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        text
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        text
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
</template>


<script>
export default {
    
}
</script>
