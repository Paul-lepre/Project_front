<template>
 <div>
  <v-card v-for="module in modules" :key="module.id">
    {{ module.name }}
  </v-card>
 </div>
</template>

<script>
import { mapAction, mapState } from 'vues'
export default {
  name: 'Home',
  async mountes () {
    this.fetchModules()// ne pas garder ça tel quel
  },
  computed: {
    ...mapState('modules', ['modules'])
  },
  methods: {
    ...mapAction('modules', ['fetchModules'])
  }
}

</script>
