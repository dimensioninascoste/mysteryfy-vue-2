<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import router from '@/router';
import { Preferences } from '@capacitor/preferences';

export const loginLocalStorage = ref()

export const loggedIn = '';

export function ifLoggedIn() {
        if(!loggedIn) {
            router.replace({ path: '/tabs/login' })        
        } else {
            console.log("utente collegato")
        }
    }


</script>