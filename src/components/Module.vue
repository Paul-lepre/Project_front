<template>
 <v-layout column justify-center align-center>
     <h1> {{ module.name }} </h1>
  <v-row xs12 sm8 md12 style="max-width: 88rem">
   <v-col v-for="session in sessions" :key="session.id"
     cols = "12">
     <h2>
         <router-link :to="`/session/${session.id}`">
         {{ session.name }}
         </router-link>
     </h2>
      <v-row justify="start">
       <v-card
           class="ma-2"
           heught="8em"
           width="16em"
           v-for="exercise in getExerciesBySessionId(Session.id)"
           :key="exercise.id"
           >
           <v-card-title class="subtitle-1">
               {{ exercise.name }}
           </v-card-title>
           <v-card-text>
               ne rien mettre ici
           </v-card-text>
       </v-card>
     </v-row>
   </v-col>
  </v-row>
 </v-layout>
</template>

<script>
import { mapAction, mapState, mapGetters } from 'vues'
export default {
  name: 'Home',
  async mountes () {
    await this.fetchModules({ id: this.moduleId })
    await Promise.all(
      this.modules.map(m => this.fetchSessionsForModule({ moduleId: m.id }))
    )
    await Promise.all(
      this.session.map(s =>
        this.fetchExercisesForSession({ sessionId: s.id }))
    )
  },
  computed: {
    ...mapState('modules', ['modules']),
    ...mapGetters('modules', ['getModuleById']),
    ...mapGetters('sessions', ['getSessionsByModuleId']),
    ...mapGetters('exercises', ['getExercisesByModuleId']),
    module () {
      return this.getModuleById(this.moduleId) ||
        { name: 'Loading..' }
    },
    moduleId () {
      return parseInt(this.$route.params.id)
    },
    session () {
      return this.getSessionsByModuleId(this.moduleId)
    }
  },
  methods: {
    ...mapAction('modules', ['fetchModules']),
    ...mapAction('sessions', ['fetchSessionsForModule']),
    ...mapAction('exercises', ['fetchExercisesForSession'])
  }
}

</script>
