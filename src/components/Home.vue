<template>
 <v-layout column justify-center align-center>
  <v-row xs12 sm8 md12 style="max-width: 88rem">
   <v-col v-for="module in modules" :key="module.id">
     <h2>
         <router-link :to="`/module/${module.is}`">
         {{ module.name }}
         </router-link>
     </h2>
      <v-row justify="start">
       <v-card
           class="ma-2"
           heught="8em"
           width="16em"
           v-for="session in getSessionsByModuleId(module.id)"
           :key="session.id"
           >
           <v-card-title class="subtitle-1">
               {{ session.name }}
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
    this.fetchModules()// ne pas garder ça tel quel
    /*
    for ( const module of this.modules) {
      await this.fetchSessionsForModule({ modulID: module.id })
    }
    */
    await Promise.all(
      this.modules.map(m => this.fetchSessionsForModule({ moduleId: m.id }))
    )
  },
  computed: {
    ...mapState('modules', ['modules']),
    ...mapGetters('sessions', ['getSessionsByModuleId'])
  },
  methods: {
    ...mapAction('modules', ['fetchModules']),
    ...mapAction('sessions', ['fetchSessionsForModule'])
  }
}

</script>
