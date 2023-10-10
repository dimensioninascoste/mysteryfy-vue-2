<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1  v-t="'terms_title'"></h1>
    <p>Testo </p>

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
  import { useI18n } from 'vue-i18n';

  console.log("lingua ", useI18n)

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
        privacy: markRaw(Privacy),
        faq: markRaw(Faq)
      };
    },
  };
</script>