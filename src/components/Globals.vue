<script lang="ts">

import { ref} from 'vue';
import { modalController } from '@ionic/vue';

import Modal from '@/components/Login.vue';

const loginLocalStorage = ref();
const isAuth = ref(true); //set true when developing: false when in productivity

async function openLoginModal() {
  await modalController.create({
      component: Modal,
      backdropDismiss: false
    });
  }

export default {
  loginLocalStorage,
  isAuth,
  openLoginModal
}

</script>