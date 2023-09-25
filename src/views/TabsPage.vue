<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" v-if="logToken">
<!--         <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-icon aria-hidden="true" src="./src/icons/crime-scene.svg" />
          <ion-label v-t="'homeHome'"></ion-label>
        </ion-tab-button> -->

        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="personSharp" />
          <ion-label v-t="'profileHome'"></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="catalog" href="/tabs/catalog">
          <ion-icon aria-hidden="true" :icon="fingerPrintSharp" />
          <ion-label v-t="'catalogHome'"></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="info" href="/tabs/info">
          <ion-icon aria-hidden="true" :icon="informationCircleSharp" />
          <ion-label v-t="'infoHome'"></ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personSharp, fingerPrintSharp, informationCircleSharp } from 'ionicons/icons';
import { loginLocalStorage } from '@/components/globals.vue';
import { onBeforeMount } from 'vue';
import { Preferences } from '@capacitor/preferences';
import router from '@/router';
import { loggedIn } from '@/components/globals.vue';
import logToken from '@/views/Login.vue'


onBeforeMount(async () => {
  const { value } = await Preferences.get({ key: 'userEmail' });
  if(value) {
    loginLocalStorage.value = true
    console.log("loginLocalStorage.value: ", loginLocalStorage.value)
  } else {
    router.push({ path: '/tabs/login' })
  }
})

</script>
