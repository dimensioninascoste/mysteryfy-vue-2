<script lang="ts">
import { ref} from 'vue';
import { modalController } from '@ionic/vue';

// import logToken from '@/components/Login.vue';
import Modal from '@/components/Login.vue';
import { googleTokenLogin } from 'vue3-google-login';

import logToken from '@/components/Login.vue';

export const loginLocalStorage = ref()

function toLogin() {
    console.log("entrato in toLogin")
    async () => {
        const modal = await modalController.create({
            component: Modal,
          });
        modal.present();
        console.log("Modal aperto?")
    }
}

export function ifLoggedIn() {
        if(logToken) {
            toLogin();
        }
    console.log("esco da ifLoggedIn")
    }

</script>