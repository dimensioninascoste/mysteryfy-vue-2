<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

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
</script>
