<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title v-t="'privacy_title'"></ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1  v-t="'privacy_title'"></h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Go to Page Two</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script lang="ts">
  import { markRaw } from 'vue';
  import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonNavLink,
    IonButton,
    IonButtons,
    IonBackButton
  } from '@ionic/vue';
  import Faq from '@/components/Faq.vue';

  export default {
    components: {
      IonHeader,
      IonTitle,
      IonToolbar,
      IonContent,
      IonNavLink,
      IonButton,
      IonButtons,
      IonBackButton
    },
    data() {
      return {
        component: markRaw(Faq),
      };
    },
  };
</script>