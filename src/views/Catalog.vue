<template>
  <ion-page>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" v-t="'catalog'">Cases</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="Tab 3 page" /> -->

      <ion-card>
        <img alt="The Portrait of the Death" src="https://www.mysteryfy.com/wp-content/uploads/2021/10/Amiltoni-Villa-300x200.jpg" />
        <ion-card-header>
          <ion-card-title color="secondary">
            <h2>Il Ritratto della Morte</h2></ion-card-title>
            <div class="ion-align-self-end">
              <ion-chip color="warning" style="width: 5rem;">
                <ion-icon :icon="gift"></ion-icon>
                <ion-label>Free!</ion-label>
              </ion-chip>
            </div>
        </ion-card-header>

        <ion-card-content>
          Un'antica maledizione riemerge dal passato portando con sé una scia di omicidi. Fantasmi o un oscuro piano di uno spietato assassino?
        </ion-card-content>
        <ion-row class="ion-justify-content-center">
          <ion-button @click="openAdventure('https:www.mysteryfy.com')">Gioca</ion-button>
        </ion-row>
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
  IonCardContent,
  IonRow,
  IonButton,
  IonChip,
  IonAvatar,
  IonLabel,
  IonIcon
} from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import { gift } from 'ionicons/icons';
import { defineComponent } from 'vue';

import { isAuth } from '@/components/globals.vue';
import { openLoginModal } from '@/components/globals.vue';

if(!isAuth.value) {
  openLoginModal.present();
}

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonChip,
    IonAvatar,
    IonLabel,
    IonIcon
  },
  setup(){
    return {
      gift
    }
  },
  methods: {
    openAdventure(adventure: string) {
      window.location.href = adventure
    }
  }
});

</script>
