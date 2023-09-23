<template>
  <ion-app>
    <ion-router-outlet />
    <div v-if="loggedIn">
      <button @click="logout">Logout</button>
      <h2>The name is: {{ user.name }}</h2>
      <h2>The email is: {{ user.email }}</h2>
      <img :src="user.picture">
    </div>
    <div v-else>
      <GoogleLogin :callback="callback" prompt auto-login></GoogleLogin>
    </div>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { logOut } from 'ionicons/icons';
import { GoogleLogin, decodeCredential, googleLogout } from 'vue3-google-login';

export default {
  data() {
    return {
      loggedIn: false,
      user: null,
      callback: (response: any) => {
        console.log("logged in")
        this.loggedIn = true
        console.log(response)
        this.user = decodeCredential(response.credential)
        
      }
    }
  },
  methods: {
    logout() {
      googleLogout()
      this.loggedIn = false
    }
  }
}
</script>