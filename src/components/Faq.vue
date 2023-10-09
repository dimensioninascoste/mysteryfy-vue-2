<template>
  <ion-header>
    <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>F.A.Q.</ion-title>
  </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <ion-back-button></ion-back-button>
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
  };
</script>