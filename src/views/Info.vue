<template>
  <ion-page>
    <ion-nav :root="component"></ion-nav>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNav
} from '@ionic/vue';
import { defineComponent, markRaw } from 'vue';
import Legal from '@/components/Legal.vue';

//manage login as modal
import { ifLoggedIn } from '@/components/globals.vue';
ifLoggedIn();

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonNav
  },
  data() {
    return {
      component: markRaw(Legal),
    }
  }
});

</script>