<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" v-if="loginLocalStorage">
<!--         <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-icon aria-hidden="true" src="./src/icons/crime-scene.svg" />
          <ion-label v-t="'homeHome'"></ion-label>
        </ion-tab-button> -->

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="personSharp" />
          <ion-label v-t="'profileHome'"></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="fingerPrintSharp" />
          <ion-label v-t="'catalogHome'"></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="informationCircleSharp" />
          <ion-label v-t="'infoHome'"></ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { images, square, triangle, settings, fingerPrintOutline, homeOutline, personSharp, fingerPrintSharp, informationCircleSharp } from 'ionicons/icons';
import { loginLocalStorage } from '@/components/globals.vue';
import { onBeforeMount } from 'vue';
import { Preferences } from '@capacitor/preferences';
import router from '@/router';

onBeforeMount(async () => {
  const { value } = await Preferences.get({ key: 'userEmail' });
  if(value) {
    loginLocalStorage.value = true
    console.log("loginLocalStorage.value: ", loginLocalStorage.value)
  } else {
    router.push({ path: '/tabs/tab1' })
  }
})

</script>
