<!-- login modal -->

<template>
  <ion-content class="ion-padding">
    <ion-router-outlet style="background:url('src/assets/loginbkg.webp') no-repeat;height: 100vh;" />
      <ion-grid>
        <ion-row class="ion-align-items-end" style="height:50vh;width:100%;">
          <ion-col class="ion-justify-content-center" style="display: flex;">
            <div>
              <GoogleLogin :callback="loginCallback" popup-type="TOKEN">
                <ion-button color="light" expand="block"><ion-icon slot="start" name="logoGoogle"></ion-icon>Login with Google</ion-button>
              </GoogleLogin><br>
              <ion-button color="light" expand="block"><ion-icon slot="start" name="star"></ion-icon>Login with Apple</ion-button>
          </div>
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
    IonButton,
    modalController,
    IonIcon
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  import { GoogleLogin, decodeCredential, googleAuthCodeLogin, googleLogout } from 'vue3-google-login';
  import type { CallbackTypes } from 'vue3-google-login';

  import { logoGooglePlaystore, star, logoGoogle, logoAppleAppstore } from 'ionicons/icons'

  export default defineComponent({
    components: {
      IonContent,
      IonRouterOutlet,
      IonGrid,
      IonRow,
      IonCol,
      IonButton,
      IonIcon,
    },
  setup() {
    const loginCallback: CallbackTypes.TokenResponseCallback = (response) => {
        console.log("Access Token", response.access_token);
        const logToken = response.access_token
        //invece di spingere la vista a /tabs/home, devo dismettere il modal
        modalController.dismiss();
        console.log("chiudo il modal")
        return {
          logToken
        }
      }
    return {
      loginCallback,
      logoGoogle,
      logoGooglePlaystore
    }
  },
});
</script>