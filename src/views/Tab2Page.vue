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
          <ion-title size="large">Your investigation Pad</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 3 page" />
      <div>
        <h1 v-t="'profileTitle'"></h1>
      </div>
      <ion-list>
        <ion-item id="locale-changer">
          <ion-select v-model="$i18n.locale" label="Language" placeholder="choose language">
            <!-- <ion-select-option v-for="(lang, i) in langs" :key="'Lang${i}'" :value="lang">{{ lang }}</ion-select-option> -->
            <ion-select-option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
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
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption
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
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption
  },
  name: 'locale-changer',
  data () {
    return { names: ['italian', 'english', 'german'] }
  },
});
</script>
