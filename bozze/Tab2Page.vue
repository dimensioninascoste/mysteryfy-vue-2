<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <!-- <ion-fab-button @click="takePhoto()"> 
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button> -->
      </ion-fab>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="Tab 2 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonCol,
  IonFab,
  IonFabButton,
  IonGrid,
  IonPage,
  IonHeader,
  IonIcon,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
/* import { usePhotoGallery } from '@/composables/usePhotoGallery';
import { backToLogin } from '@/components/globals.vue';

  backToLogin;

const { takePhoto } = usePhotoGallery(); */
</script>
