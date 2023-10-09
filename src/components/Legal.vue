<template>
  <ion-header>
    <ion-toolbar>
      <ion-title v-t="'legal_Title'"></ion-title>
    </ion-toolbar>

    <ion-nav-link router-direction="forward" :component="terms">
      <ion-button v-t="'legal_Terms'"></ion-button>
    </ion-nav-link>
    <ion-nav-link router-direction="forward" :component="privacy">
      <ion-button v-t="'legal_Privacy'"></ion-button>
    </ion-nav-link>
    <ion-nav-link router-direction="forward" :component="faq">
      <ion-button v-t="'legal_FAQ'"></ion-button>
    </ion-nav-link>
  </ion-header>
  <ion-content class="ion-padding">
    <h1  v-t="'legal_Title'"></h1>
    <p v-t="'legal_Home'"></p>
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
  import Terms from '@/components/Terms.vue';
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
        terms: markRaw(Terms),
        privacy: markRaw(Privacy),
        faq: markRaw(Faq)
      };
    },
  };
</script>