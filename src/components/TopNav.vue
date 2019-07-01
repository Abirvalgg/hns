<template>
    <nav>
        <v-toolbar app flat>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout align-center justify-center column="" class="mt-4">
            <v-avatar size="70">
                 <v-img :src="`https://st3.depositphotos.com/7820448/17726/v/450/depositphotos_177264982-stock-illustration-running-animals-round-frame-with.jpg`" aspect-ratio="3" contain></v-img>
            </v-avatar>
            <p class="subheading mt-4">Elementary Teacher</p>
            <Popup/>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>


<script>
import Popup from './Popup'
export default {
    name: 'TopNav',
    props: ['topnav'],
    components: {
        Popup,
    },
    data () {
        return {
           drawer: false,
           links: [
                { icon: 'dashboard', text: 'Расписание', route: '/' },
                { icon: 'book', text: 'Мои группы', route: '/projects' },
                { icon: 'assignment_turned_in', text: 'Отчеты', route: '/reports' },
                { icon: 'person', text: 'Что-то', route: '/team' },
                { icon: 'bug_report', text: 'GTD 16.05 ver. a.0.1', route: '/gtd' },
           ]
        }
    },
    created () {
    
    },
    methods: {
        cl() {
            // console.log("asd")
        }
    },
}
</script>
