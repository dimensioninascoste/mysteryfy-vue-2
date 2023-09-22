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
import Terms from '@/components/Terms.vue';

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
      component: markRaw(Terms),
    }
  }
});

</script>