<template>
  <ion-header>
    <ion-toolbar>
      <ion-title v-t="'terms_title'"></ion-title>
    </ion-toolbar>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Privacy</ion-button>
    </ion-nav-link>
    <ion-nav-link router-direction="forward" :component="cnext">
      <ion-button>FAQ</ion-button>
    </ion-nav-link>
  </ion-header>
  <ion-content class="ion-padding">
    <h1  v-t="'terms_title'"></h1>

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
  import Privacy from '@/components/Privacy.vue';
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
        component: markRaw(Privacy),
        cnext: markRaw(Faq)
      };
    },
  };
</script>