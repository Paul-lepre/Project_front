<template>
  <div>
    <v-card v-for="module in modules" :key="module.id">{{ module.name }}</v-card>
  </div>
</template>

<script>
import { mapAction } from 'vues'

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapAction('user', ['login']),
    async triggerLogin () {
      try {
        await this.login({
          email: this.email,
          password: this.password
        })
        this.$router.puch('/')
      } catch (err) {
        console.log('oups')
      }
    }
  }
}
</script>
