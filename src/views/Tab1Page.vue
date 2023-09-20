<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Mysteryfy Home Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>

    <!-- <ion-header collapse="condense">
            <ion-toolbar>
                <ion-title size="large" v-t="'welcome'"></ion-title>
            </ion-toolbar>
        </ion-header> -->
        
            <ion-grid style="height:100%">
                <ion-row>
                    <ion-col>
                        <h2 v-t="'welcome'"></h2>
                        <p v-t="'welcome_message'"></p>
                        <p v-t="'privacy_policy'"></p><span v-html="$t('link_to_privacy')"></span>
                        
                    </ion-col>
                </ion-row>
                <ion-row class="ion-align-items-center" style="height:100%">
                    <ion-col>
                        <div v-if="!loginLocalStorage">
                            <ion-card>
                                <ion-item>
                                    <!-- <ion-label position="floating" aria-label="Email" v-t="'insert_email'"></ion-label> -->
                                    <ion-input v-model="email" type="email" labelPlacement="floating" aria-label="Email" label="Insert email" for="email" required></ion-input>
                                </ion-item>
                                <div v-if="validateEmail(email)">
                                    <ion-button expand="block" @click="sendEmail" v-t="'send'"></ion-button>
                                </div>
                                <div v-else>
                                    <ion-button expand="block" :disabled="true"  v-t="'send'"></ion-button>
                                </div>
                            </ion-card>
                        </div>

                        <!-- Mostra un messaggio se la variabile email non è vuota -->
                        <!-- <div v-else-if="loginLocalStorage === 'checkemail'"> -->
                        <div v-else>
                            <ion-card>
                                <ion-card-content>
                                    <ion-card-title>
                                        <h1>First step</h1>
                                    </ion-card-title>
                                    <p>Mysteryfy ti ha appena inviato un messaggio all'indirizzo che ci hai dato</p>
                                    <p class="ion-text-center ion-padding">{{ email }}</p>
                                    <p>Per favore, controlla il messaggio e clicca per confermare il tuo indirizzo.</p>
                                    <div>
                                        <ion-button @click="checkEmail" v-t="'emailChecked'" class="ion-justify-content-center ion-text-center ion-padding"></ion-button>
                                    </div>
                                </ion-card-content>
                            </ion-card>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>

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
    loadingController,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/vue';
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { Preferences } from '@capacitor/preferences';
import axios from 'axios';
import { loginLocalStorage } from '@/components/globals.vue';
import router from '@/router';

const en_privacy_link = "https://www.iubenda.com/privacy-policy/33072070";
const it_privacy_link = "https://www.iubenda.com/privacy-policy/61536869";

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
    IonLoading,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol
    },

    setup() {
        // Crea una variabile reattiva per memorizzare lo stato della email dell'utente
        //var statusUserEmail = false;
        const email = ref('');
        // const emailLocalStorage = loginLocalStorage;
        const loading = ref()
        console.log("Valore di emailLocalStorage: ", loginLocalStorage)

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

        async function hideSpinner() {
            if(loading) {
                loading.value.dismiss();
            }
        }

        // Crea una funzione asincrona per verificare se la email dell'utente esiste già nel localstorage
        async function checkEmail() {
            // Ottieni il valore della chiave 'userEmail' nel localstorage
                const { value } = await Preferences.get({ key: 'userEmail' });

                // Se il valore esiste, interrogo il database per verificare se "status": "confirmed"
                if (value) {
                    //se l'email è stata inserita assegno il valore della chiave 'userEmail'
                    email.value = value;
                    
                    //quindi chiamo la funzione per verificare lo status dell'email
                    await axios.get(fetchDateUrl(value))
                    .then((response) => {
                         console.log("Risposta del server: ", response.data.status)
                         //se lo status è confermato valorizzo la variabile per visualizzare la dashboard
                         if(response.data.status === "confirmed") {
                            loginLocalStorage.value = "dashboard";
                            router.replace({ path: '/tabs/tab2' })
                         } else {
                            //se lo status non è confermato, restituisco un messaggio di controllare la propria mailbox
                            loginLocalStorage.value = "checkemail";
                         }
                    })
                    //loginLocalStorage.value = "checkemail";
                    console.log("LocalStorage presente: ", value, "Valore di loginLocalStorage: ", loginLocalStorage)
                }

            // Se il valore non esiste, lascia la variabile email vuota
                else { 
                    //email.value = '';
                    loginLocalStorage.value = "";
                    console.log("non c'è localStorage. Valore loginLocalStorage: ", loginLocalStorage)
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
            loginLocalStorage.value = "dashboard";
            //loading.value = false;
            //loading.value.dismiss();
            hideSpinner();
        }

/*         function checkUpdate(this: any) {
            this.checkEmail();
        
            setInterval( () => {
                this.checkEmail();
                console.log("Interrogo il server: che dice?")
            }, 30000); 
        } */

        //controllo periodicamente il serer per verificare se i dati dell'utente sono stati aggiornati

        // Chiama la funzione checkEmail quando il componente viene montato
        onMounted(showSpinner)
        onMounted(checkEmail);
        //onMounted(checkUpdate)

        // Restituisci le variabili e le funzioni che vuoi usare nel template
        return {
            email,
            //emailLocalStorage,
            loading,
            showSpinner,
            checkEmail,
            sendEmail,
            loginLocalStorage
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
        }
    },
});
</script>

<style scoped>
    ion-content {
        --background: none !important;
        background-image: url('./src/assets/loginbkg.webp');
        background-size: cover; 
    }
</style>
