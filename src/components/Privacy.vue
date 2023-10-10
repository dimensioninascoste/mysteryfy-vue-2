<template>
  <ion-header>

    <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title v-t="'legal_Privacy'">Privacy</ion-title>
  </ion-toolbar>
  </ion-header>
  <ion-content>
    <iframe style="height:100%;width:100%" :src="privacylink"></iframe>
  </ion-content>
</template>

<script lang="ts">
  import { markRaw, ref } from 'vue';
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

  import { clientLang } from '@/components/clientlang';

  var privacylink: string;
  if(clientLang.value !== "en") {
    privacylink = "https://www.iubenda.com/privacy-policy/61536869";
  } else {
    privacylink = "https://www.iubenda.com/privacy-policy/33072070"
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
        faq: markRaw(Faq),
        privacylink
      };
    },
  };

</script>