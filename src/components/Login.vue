<!-- login modal -->

<template>
  <ion-content class="ion-padding">
    <ion-router-outlet />
    <ion-grid>
      <ion-row>
        <ion-col>
          <GoogleLogin :callback="loginCallback" popup-type="TOKEN" prompt auto-login>
            <button>Login Using Google</button>
          </GoogleLogin>
          <!-- <button @click="login">Login Using Google</button> -->
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonRouterOutlet,
    IonGrid,
    IonRow,
    IonCol,
    modalController,
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  const name = ref();

import { GoogleLogin, decodeCredential, googleAuthCodeLogin, googleLogout } from 'vue3-google-login';
import type { CallbackTypes } from 'vue3-google-login';

export default defineComponent({
  components: {},
  setup() {
    const loginCallback: CallbackTypes.TokenResponseCallback = (response) => {
        console.log("Access Token", response.access_token);
        const logToken = response.access_token
        //invece di spingere la vista a /tabs/home, devo dismettere il modal
        //router.push({ path: '/tabs/home' })
        modalController.dismiss();
        return {
          logToken
        }
      }
    return {
      loginCallback,
    }
  },
});
</script>