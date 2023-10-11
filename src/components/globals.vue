<script lang="ts">

import { ref} from 'vue';
import { modalController } from '@ionic/vue';

import Modal from '@/components/Login.vue';

export const loginLocalStorage = ref();
export const isAuth = ref(true); //set true when developing: false when in productivity

export const openLoginModal = await modalController.create({
      component: Modal,
      backdropDismiss: false
    });

</script>