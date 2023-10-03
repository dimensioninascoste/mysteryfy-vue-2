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

      <ExploreContainer name="Home page" />     
      <ion-grid>
        <ion-row>
          <ion-col size="9">
            <h1 v-t="'profileTitle'"></h1>
          </ion-col>
          <ion-col size="3">
            <ion-icon :icon="ellipsisVerticalOutline"></ion-icon>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="4">
                <ion-avatar>
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
        <ion-row>
          <button @click="logout" :icon="logOut">Logout</button>
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
  IonIcon,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonAvatar,
  IonSelect,
  IonSelectOption,
modalController
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { Preferences } from '@capacitor/preferences';
import { ellipsisVerticalOutline, logOut } from 'ionicons/icons';
import { googleLogout } from 'vue3-google-login';
import { ifLoggedIn } from '@/components/globals.vue';

import router from '@/router';

//manage login as modal
import Modal from '@/components/Login.vue';
const openLogin = () => {
  modalController.create({
    component: Modal,
  })
}

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
    IonIcon,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonAvatar,
    IonSelect,
    IonSelectOption,
  },
  name: 'locale-changer',
  setup() {
    const email = ref('');
    const logToken = ref();
    async () => {
      const { value } = await Preferences.get({ key: 'userEmail' });
        if(value) {
          email.value = value
        }
      }
    onBeforeMount(() => {
      modalController.create({
          component: Modal,
        })
        console.log("dopo il Modal")
      });
    return {
      email,
      logOut,
      ellipsisVerticalOutline,
      logToken
    }
  },
  data () {
    return { names: ['italian', 'english', 'german'] }
  },
  methods: {
      logout() {
        googleLogout()
        console.log("Logged out")
        router.replace({ path: '/tabs/login' })
      }
    },
  
});
</script>
