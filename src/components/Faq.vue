<template>
  <ion-header>
    <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title v-t="'legal_FAQ'"></ion-title>
  </ion-toolbar>
  </ion-header>
  <ion-content>
    <iframe style="height:100%;width:100%" :src="faqlink"></iframe>
  </ion-content>
</template>

<script lang="ts">
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

  import { clientLang } from '@/components/clientlang';

var faqlink: string;
if(clientLang.value !== "en") {
  faqlink = "https://www.mysteryfy.com/mysteryfy-domande-frequenti/";
} else {
  faqlink = "https://www.mysteryfy.com/mysteryfy-faq/"
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
        faqlink
      }
    }
  };
</script>