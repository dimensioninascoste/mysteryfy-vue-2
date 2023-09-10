<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Verifica Email</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
        <ion-header collapse="condense">
        <ion-toolbar>
        <ion-title size="large">Verifica Email</ion-title>
        </ion-toolbar>
        </ion-header>
        <!-- Mostra il form solo se la variabile email è vuota -->
        <div v-if="!emailLocalStorage">
            <ion-item>
                <ion-label position="floating">Inserisci la tua email</ion-label>
                <ion-input v-model="email" type="email" for="email" required></ion-input>
            </ion-item>
            <div v-if="validateEmail(email)">
                <ion-button expand="block" @click="sendEmail">Invia</ion-button>
<!--                 <div>
                    <ion-spinner v-if="loading" name="bubbles"></ion-spinner>
                </div> -->
            </div>
            <div v-else>
                <ion-button expand="block" :disabled="true">Invia</ion-button>
            </div>
            
        </div>
        <!-- Mostra un messaggio se la variabile email non è vuota -->
        <div v-else-if="emailLocalStorage = 'dashboard'">
            <p>La tua email è già stata inviata al client: {{ email }}</p>
            <p>{{ emailLocalStorage }}</p>
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
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    IonLoading,
    loadingController
} from '@ionic/vue';
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { Preferences } from '@capacitor/preferences';
import axios from 'axios';

export var fetchDateUrl = (date: string) => `https://www.mysteryfy.com/wp-json/newsletter/v2/subscribers/${date}?client_key=42aa7ec963b0fbbcbfa10e49a992ddccd3c0bdb5&client_secret=c080d95d498b04dd0763c739632561acc2938b4e`;

export default defineComponent({
    name: 'Home',
    components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    IonLoading
    },

    setup() {
    // Crea una variabile reattiva per memorizzare lo stato della email dell'utente
        //var statusUserEmail = false;
        const email = ref('');
        const emailLocalStorage = ref(''); 
        const loading = ref()

        // Crea una funzione per mostrare lo spinner a piena pagina
        async function showSpinner() {
            loading.value = await loadingController.create({
                spinner: 'lines',
                message: 'Waiting please...',
                duration: 0,
                translucent: true,
            });
            await loading.value.present();
        }

        // Crea una funzione asincrona per verificare se la email dell'utente esiste già nel localstorage
        async function checkEmail() {
            // Ottieni il valore della chiave 'userEmail' nel localstorage
                const { value } = await Preferences.get({ key: 'userEmail' });

                // Se il valore esiste, interrogo il database per verificare se "status": "confirmed"
                if (value) {
                    await axios.get(fetchDateUrl(value))
                    .then((response) => {
                         console.log(response)
                    })
                email.value = value;
                emailLocalStorage.value = "dashboard";
                console.log("LocalStorage presente: ", value)
            }

            //se lo status è confermato assegno i valore della chiave 'userEmail' alla variabile email
            //se lo status non è cofermato, restituisco un messaggio
            //se lo status è confermato, carico la dashboard dell'utente

            // Se il valore non esiste, lascia la variabile email vuota
                else { 
                    //email.value = '';
                    console.log("non c'è localStorage")
                }
                loading.value.dismiss();
            }

        // Crea una funzione asincrona per inviare la email dell'utente al client e salvarla nel localstorage
        async function sendEmail() {
            // avvia lo spinner
            showSpinner();
            //loading.value = true;
            // Salva la email dell'utente nel localstorage con la chiave 'userEmail'
            await Preferences.set({ key: 'userEmail', value: email.value });
            // Invia la email dell'utente al client con una richiesta HTTP
            await axios
                .post('https://www.mysteryfy.com/wp-json/newsletter/v2/subscriptions', { email: email.value })
                .catch((error) => {error.response.data.code === 'exists'?console.log("Email già presente"):console.log("Altro errore")});
            
            // Richiamo la funzione di controllo della localStorage e dello status di conferma dell'email
            checkEmail();
            emailLocalStorage.value = "dashboard";
            //loading.value = false;
            loading.value.dismiss();
        }

        // Chiama la funzione checkEmail quando il componente viene montato
        onMounted(showSpinner)
        onMounted(checkEmail);

        // Restituisci le variabili e le funzioni che vuoi usare nel template
        return {
            email,
            emailLocalStorage,
            loading,
            showSpinner,
            checkEmail,
            sendEmail,
        };
    },
    methods: {
        validateEmail(value: any) {
            if (this.email) {    
                var reg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ;
                
                if (reg.test(value)) {
                    this.checkEmail()
                    return true;
                    console.log('valid email address');
                } else {
                    return false;
                    console.log("email ok");
                }
            }
        },
    }
});
</script>
