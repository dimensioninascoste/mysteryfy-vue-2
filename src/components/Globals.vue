<script lang="ts">

import { ref} from 'vue';
import { modalController } from '@ionic/vue';

import Modal from '@/components/Login.vue';

const loginLocalStorage = ref();
const isAuth = ref(true); //set true when developing: false when in productivity

const openLoginModal = async () => {
  const loginmodal = await modalController.create({
      component: Modal,
      backdropDismiss: false
    });
    if(!isAuth.value) {
      return loginmodal.present();
    }
  }

export default {
  loginLocalStorage,
  isAuth,
  openLoginModal
}

</script>