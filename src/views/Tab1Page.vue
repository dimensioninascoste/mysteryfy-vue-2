<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Mysteryfy</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Mysteryfy</ion-title>
                </ion-toolbar>
            </ion-header>
            <div id="container">
                <strong>{{ languageCode }}</strong>
                <h1 v-t="'title'"></h1>
                <p v-t="'description'"></p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { Device } from '@capacitor/device';

export default defineComponent({
    name: 'Home',
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
        },
    data() {
        return {
            languageCode: '',
        };
    },
    async mounted() {
      // Ottieni il codice della lingua del dispositivo
      const { value } = await Device.getLanguageCode();
      // Assegna il valore alla variabile languageCode
      this.languageCode = value;
    },
/*     methods: {
      changeLanguage($event: any) {
            this.$i18n.locale = $event.detail.value;
            console.log("valore di changeLanguage:", this.$i18n);
          } 
    } */
});
</script>