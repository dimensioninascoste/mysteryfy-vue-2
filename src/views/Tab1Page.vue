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
                <!-- <strong>{{ languageCode }}</strong> -->
                <h1 v-t="'title'"></h1>
                <p v-t="'description'"></p>
                <p v-if="currentUser">Bella!</p>
                <form @submit.prevent="saveData()">
                    <input type="text" placeholder="name"  v-model="user.name">
                    <input type="email" placeholder="email" v-model="user.email">
                    <button type="submit">Save</button>
                </form>
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
    //modalController
} from '@ionic/vue';
import { key } from 'ionicons/icons';
//import { defineComponent } from 'vue';

export default{
        name: 'Home',
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
        },
      data(){
        return{
          user:{
             name:'',
             email:''
          }
        }
      },
      methods: {
        saveData(){
            localStorage.setItem('loggedUser', JSON.stringify(this.user))
        }
      },
      mounted() {
        var currentUser = JSON.parse(localStorage.getItem('loggedUser'));
        console.log(currentUser);
      }
}

// export default defineComponent({

//     methods: {
//       changeLanguage($event: any) {
//             this.$i18n.locale = $event.detail.value;
//             console.log("valore di changeLanguage:", this.$i18n);
//           } 
//     }
// });
</script>