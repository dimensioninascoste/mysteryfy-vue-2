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

      <ion-card>
        <ion-grid>

          <ion-row class="ion-justify-content-center">
            <ion-col size="12">
              <h2 color="secondary">Il Ritratto della Morte</h2>
            </ion-col>
            <ion-col size="12" size-sm="6" class="">
              <img alt="The Portrait of the Death" src="https://www.mysteryfy.com/pwastories/il_ritratto_della_morte/copertina/copertina.webp" style="width: 100%;"/>
            </ion-col>

            <ion-col size="12" size-sm="6">
              <ion-chip color="warning" style="width: 5rem;">
                <ion-icon :icon="gift"></ion-icon>
                <ion-label>Free!</ion-label>
              </ion-chip>
              <p>Un'antica maledizione riemerge dal passato portando con sé una scia di omicidi. Fantasmi o un oscuro piano di uno spietato assassino?</p>
              <ion-button @click="openAdventure('https:www.mysteryfy.com/pwastories/il_ritratto_della_morte/index?LANGUAGE=')">Gioca</ion-button>
            </ion-col>
          </ion-row>

        </ion-grid>
      </ion-card>

      <div v-if="storie.length">

        <ion-card v-for="storia in storie" :key="storia.id" class="storia">
          <ion-grid>

            <ion-row class="ion-justify-content-center">
              <ion-col size="12">
                <h2 color="secondary">{{ storia.titolo }}</h2>
              </ion-col>
              <ion-col size="12" size-sm="6" class="">
                <img :alt="storia.titolo" :src="storia.copertina" style="width: 100%;"/>
                <!-- "https://www.mysteryfy.com/pwastories/il_ritratto_della_morte/copertina/copertina.webp"-->
              </ion-col>

              <ion-col size="12" size-sm="6">
                <ion-chip color="warning" style="width: 5rem;">
                  <ion-icon :icon="gift"></ion-icon>
                  <ion-label>Free!</ion-label>
                </ion-chip>
                <p>{{ storia.descrizione_breve }}</p>
                <ion-button @click="openAdventure('https:www.mysteryfy.com/pwastories/il_ritratto_della_morte/index?LANGUAGE=')">Gioca</ion-button>
              </ion-col>
            </ion-row>

            </ion-grid>
          <h2></h2>
        </ion-card>
      </div>

      <div v-else>
        Sto caricando...
      </div>
    
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

import isAuth from '@/components/Globals.vue';
import openLoginModal from '@/components/Globals.vue';

import { clientLang } from '@/components/clientlang';

if(!isAuth.value) {
  openLoginModal.present();
}

//imposto l'indirizzo del json
//const API_URL = 'https://www.mysteryfy.com/pwastories';
const API_URL = 'http://localhost:3000/storie'

export default {
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
      gift,
    }
  },
  //https://stackoverflow.com/questions/44147937/property-does-not-exist-on-type-never
  data: () => {
    return {
      storie: <any[]>([]),
    }
  },
  //https://www.youtube.com/watch?v=7iDGJolHFmU
  mounted() {
      fetch(API_URL) //funzione asincrona che attende una promise
        .then(res => res.json())          //anche res.json è asincrona e contiene una promise
        .then(data => this.storie = data)
        .catch(err => console.log(err.message))
  },
  methods: {
    openAdventure(adventure: string) {
      window.location.href = adventure
    },
   
  }
};

</script>
