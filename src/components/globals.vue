<script lang="ts">

import { ref} from 'vue';
import { modalController } from '@ionic/vue';

// import logToken from '@/components/Login.vue';
import Modal from '@/components/Login.vue';

export const loginLocalStorage = ref();
export const isAuth = ref(false);

export const openLoginModal = await modalController.create({
      component: Modal,
      backdropDismiss: false
    });

</script>