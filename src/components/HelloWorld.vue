<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="email"
            label="email"
            :rules="[(email) => emailPattern.test(email) || ('Email Invalide')]"
            required
            single-line
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <div class="my-2">
          <v-btn
          text small color="primary"
          @click="login()"
          >Submit
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    emailPattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    email: '',
    password: ''
  }),
  methods: {
    async login () {
      await axios.post('http://localhost:3000/api/v1/login', {
        body: {
          username: this.email,
          password: this.password
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
        .then(Response => {
          console.log(Response)
        })
    }
  }
}
</script>
