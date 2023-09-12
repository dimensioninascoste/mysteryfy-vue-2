<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <!-- <ion-icon aria-hidden="true" src="./src/icons/crime-scene.svg" /> -->
          <ion-label v-t="'homeHome'"></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" v-if="loginLocalStorage === 'dashboard'" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="fingerPrintSharp" />
          <ion-label v-t="'catalogHome'"></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" v-if="loginLocalStorage === 'dashboard'" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="personSharp" />
          <ion-label v-t="'profileHome'"></ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 4</ion-label>
        </ion-tab-button> -->

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { images, square, triangle, settings, fingerPrintOutline, homeOutline, personSharp, fingerPrintSharp } from 'ionicons/icons';
import { loginLocalStorage } from '@/components/globals.vue';
</script>
