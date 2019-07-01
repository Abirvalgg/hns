<template>
  <div class="project">

    <h1>This is an students component</h1>

    <v-container class="my-5">
      <v-layout row class="my-3">
        <v-tooltip top>
          сортировка по имени
          <v-btn small flat color="grey" @click="sortBy('name')" slot="activator">
            <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">По имени</span>
        </v-btn>
        </v-tooltip>
        <v-tooltip top>
          сортировка по уровню
        <v-btn small flat color="grey" @click="sortBy('level')" slot="activator">
          <v-icon left small>line_weight</v-icon>
          <span class="caption text-lowercase">По уровню</span>
        </v-btn>
        </v-tooltip>
      </v-layout>


      <v-card flat="" v-for="project in students" :key="project.name">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs5>
            <div class="caption grey--text">Студент например</div>
            <div>{{ project.name }}</div>
          </v-flex>
          <v-flex xs2>
            <div class="caption grey--text">Уровень</div>
            <div>{{ project.level }}</div>
          </v-flex>
          <v-flex xs2>
            <div class="caption grey--text">Статус?</div>
            <div>
            <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs3>
            <v-btn text icon color="green" @click="project.status = 'ongoing'">
              <v-icon>thumb_up</v-icon>
            </v-btn>
            <v-btn text icon color="red" @click="project.status = 'stop'">
              <v-icon>thumb_up</v-icon>
            </v-btn>
            <v-btn text icon color="yellow" @click="project.status = 'problem'">
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { name: 'Примерный Студент', level: 'Elementary', status: 'stop', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { name: 'Cильный Студент', level: 'Elementary', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { name: 'Верный Студент', level: 'Advanced', status: 'stop', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { name: 'Богатый Студент', level: 'Newbie', status: 'problem', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.students.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>

.project.ongoing {
  border-left: 4px solid green;
}
.project.stop {
  border-left: 4px solid red;
}
.project.problem {
  border-left: 4px solid yellow;
}
.v-chip.ongoing {
  background: green;
}
.v-chip.stop {
  background: red;
}
.v-chip.problem {
  background: rgba(209, 209, 102, 0.589);
}

</style>
