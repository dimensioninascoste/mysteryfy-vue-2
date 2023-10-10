<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title v-t="'legal_Terms'">Privacy</ion-title>
    </ion-toolbar>
  </ion-header>


  <ion-content>
    <iframe style="height:100%;width:100%" :src="termslink"></iframe>

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

  import { clientLang } from '@/components/clientlang';

  var termslink: string;
  if(clientLang.value !== "en") {
    termslink = "https://www.iubenda.com/termini-e-condizioni/61536869";
  } else {
    termslink = "https://www.iubenda.com/terms-and-conditions/33072070"
  }


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
        faq: markRaw(Faq),
        termslink
      };
    },
  };
</script>