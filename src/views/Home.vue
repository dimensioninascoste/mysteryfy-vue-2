<template>
  <ion-page>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Your investigation Pad</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="Home page" />      -->
      <ion-grid>
        <ion-row>
          <ion-col size="9" size-lg="7" offset-lg="2" class="ion-text-center">
            <h1 v-t="'profileTitle'"></h1>
          </ion-col>
          <ion-col size="1" size-lg="1">
            <h1 class="ion-text-end"><ion-icon :icon="ellipsisVerticalOutline"></ion-icon></h1>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col offset="4" offset-lg="2" class="ion-justify-content-center" style="display: flex;">
                <ion-avatar>
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
          </ion-col>
          <ion-col size="8" size-lg="6">
            <ion-label style="height: 50%">
                  <h1>Miss Marple</h1>
                  <p>1969</p>
                </ion-label>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-text-center">
            <h2 v-t="'home_storyPlayed'"></h2>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center" style="height: 20vh">
          <ion-col size="3"> 1 </ion-col>
          <ion-col size="3"> 2 </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-text-center">
            <h2 v-t="'home_nextStory'"></h2>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center" style="height: 20vh">
          <ion-col size="3"> 1 </ion-col>
          <ion-col size="3"> 2 </ion-col>
        </ion-row>

        <ion-row>
          <ion-col offset="2" size="8" offset-lg="4" size-lg="4">          
            <ion-item id="locale-changer">
              <ion-select v-model="$i18n.locale" label="Language" placeholder="choose language">
                <ion-select-option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col offset="2" size="8" class="ion-justify-content-center" style="display: flex">          
            <ion-button color="light" size="small" fill="outline" @click="profileLogout" :icon="logOut" v-t="'home_LogOut'"></ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

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
  IonButton
} from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { Preferences } from '@capacitor/preferences';
import { ellipsisVerticalOutline, logOut } from 'ionicons/icons';
import { googleLogout } from 'vue3-google-login';

//manage login as modal
import { isAuth } from '@/components/globals.vue';
import { openLoginModal } from '@/components/globals.vue';

if(!isAuth.value) {
  openLoginModal.present();
}

//controllo della localstorage della email
const email = ref('');
async () => {
      const { value } = await Preferences.get({ key: 'userEmail' });
        if(value) {
          email.value = value
        }
      };

//Google logout
const profileLogout = async () => {
  googleLogout()
  console.log("googleLogout")
  isAuth.value = false;
  openLoginModal.present();
  console.log("Modal present")
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
    IonButton
  },
  name: 'locale-changer',
  data () {
    return { names: ['italian', 'english', 'german'],
      email,
      logOut,
      ellipsisVerticalOutline,
      profileLogout,
    }
  },
});
</script>
