<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Info and help</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="Tab 3 page" /> -->
      <div>
        <h1 v-t="'catalog'"></h1>
      </div>

      <ion-card>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
      


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent

} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardSubtitle,
IonCardContent
  },
});

</script>
