// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { createI18n } from 'vue-i18n';
import { globalizationList } from '@/lang/globalizationData';
import { Device, DevicePlugin } from '@capacitor/device';

await Device.getLanguageCode().then((res) => {
  if (res.value.includes('-')) {
    var deviceLang;
    const language = res.value.split('-')[0];
    deviceLang = language;
  } else {
    deviceLang = res.value;
  }

  const i18n = createI18n({
    locale: deviceLang, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: globalizationList, // set locale messages
    preserveDirectiveContent: true
  });

  console.log(i18n)

  const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n);
  
  router.isReady().then(() => {
    app.mount('#app');
    });
})