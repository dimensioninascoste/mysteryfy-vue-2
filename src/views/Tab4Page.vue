<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Info and help</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" v-t="'info_help'"></ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 4 page" />
      <h1>Aiuti, informazioni e altro</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  },
});

</script>