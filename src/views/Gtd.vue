<template>
  <div class="team">
    <v-container class="my-3">

        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in group" :key="person.name">
                <v-card flat class="text-xs-center ma-3">
                    <v-resposive class="pt-4">
                        <v-img :src="`https://st3.depositphotos.com/7820448/17726/v/450/depositphotos_177264982-stock-illustration-running-animals-round-frame-with.jpg`" aspect-ratio="3" contain></v-img>
                    </v-resposive>
                    <v-card-text>
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.phone }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="grey">
                            <v-icon small left>call</v-icon>
                            <span>call</span>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn flat color="grey">
                            <v-icon small left>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            group: [
                {name: 'Helga Brown', phone: '89547986373'},
                {name: 'Maria Red', phone: '89954786373'},
                {name: 'Ivan Valenkov', phone: '89986523373'},
                {name: 'Maxim Minimumov', phone: '86546547373'},
                {name: 'Daria Orange', phone: '82356547373'},
                {name: 'Fedor Black', phone: '88636547373'},
                {name: 'Geneva Blue', phone: '89986456373'},
            ]
        }
    }
  }
</script>