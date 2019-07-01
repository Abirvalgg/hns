<template>
  <div class="team">
    
    <h1>This is an Team page</h1>

    <v-container class="my-5">
      
      <v-expansion-panel>
        <v-expansion-panel-content v-for="student in myStudents" :key="student.title">
          <div slot="header">{{student.name}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{student.level}}</div>
              <div>{{student.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

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
  computed: {
    myStudents(){
      return this.students.filter(student => {
        return student.level === 'Elementary'
      })
    }
  }
}
</script>