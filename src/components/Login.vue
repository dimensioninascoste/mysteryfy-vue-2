<!-- login modal -->

<template>
  <ion-content>
      <ion-grid style="background:url(src/assets/loginbkg.webp) no-repeat;background-size:cover;background-position: bottom;height: 100%;">
        <ion-row class="ion-align-items-end" style="height:50vh">
          <ion-col class="ion-justify-content-center" style="display: flex;">
            <div class="ion-text-start">
              <GoogleLogin :callback="loginCallback" popup-type="TOKEN">
                <ion-button color="light" expand="block"><ion-icon slot="start" :icon="logoGoogle"></ion-icon>Login with Google</ion-button>
              </GoogleLogin><br>
              <ion-button color="light" expand="block"><ion-icon slot="start" :icon="logoApple"></ion-icon>Login with Apple</ion-button>
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
  import type { CallbackTypes } from 'vue3-google-login';
  import { logoGoogle, logoApple } from 'ionicons/icons';
  import { isAuth } from '@/components/Globals.vue';

  const loginCallback: CallbackTypes.TokenResponseCallback = (response) => {
        console.log("Access Token", response.access_token);
        const logToken = response.access_token
        isAuth.value = true;
        //invece di spingere la vista a /tabs/home, devo dismettere il modal
        modalController.dismiss();
        console.log("chiudo il modal")
        return {
          logToken
        }
      }

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
  data() {
    return {
      loginCallback,
      logoGoogle,
      logoApple
    }
  },
});
</script>