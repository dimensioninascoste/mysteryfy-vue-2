<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mysteryfy</ion-title>
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
      
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="4">
                <ion-avatar slot="start">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
          </ion-col>
          <ion-col size="8">
            <ion-label style="height: 50%">
                  <h1>Miss Marple</h1>
                  <p>email: {{ email }}</p>
                  <p>1969</p>
                </ion-label>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center" style="height: 50%">
          <ion-col size="3"> 1 </ion-col>
          <ion-col size="3"> 2 </ion-col>
        </ion-row>
      </ion-grid>

      <ion-list>
        <ion-item id="locale-changer">
          <ion-select v-model="$i18n.locale" label="Language" placeholder="choose language">
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
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonAvatar,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent, ref } from 'vue';
import { Preferences } from '@capacitor/preferences';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonAvatar,
    IonSelect,
    IonSelectOption
  },
  name: 'locale-changer',
  data () {
    return { names: ['italian', 'english', 'german'] }
  },
  methods: {

  },
  setup() {
    const email = ref('');
    async () => {
      const { value } = await Preferences.get({ key: 'userEmail' });
        if(value) {
          email.value = value
        }
      }
    return {
      email
    }
  }
});
</script>
