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
            <div id="container" class="ion-padding">
                <ion-button expand="block" @click="openModal">Open Modal</ion-button>
                <p>{{ message }}</p>
                <!-- <strong>{{ languageCode }}</strong> -->
                <h1 v-t="'title'"></h1>
                <p v-t="'description'"></p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    modalController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const message = ref('This modal example uses the modalController to present and dismiss modals.');

  const openModal = async () => {
    const modal = await modalController.create({
      component: Modal,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      message.value = `Hello, ${data}!`;
    }
  };

// export default defineComponent({
//     name: 'Home',
//         components: {
//             IonContent,
//             IonHeader,
//             IonPage,
//             IonTitle,
//             IonToolbar,
//         },
//     methods: {
//       changeLanguage($event: any) {
//             this.$i18n.locale = $event.detail.value;
//             console.log("valore di changeLanguage:", this.$i18n);
//           } 
//     }
// });
</script>