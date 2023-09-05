<template>
  <ion-page>
    <ion-content class="locale-changer">
      <!-- <ion-select v-model="$i18n.locale"> -->
        <!-- <ion-select-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </ion-select-option> 
      </ion-select>-->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';

// export default {
//   name: 'locale-changer',
//   data () {
//     return { langs: ['it', 'en', 'de'] }
//   }
// };
</script>