<script lang="ts">
import { ref } from 'vue';
import router from '@/router';

    export const loginLocalStorage = ref('');

    export const backToLogin = function() {
        router.push({ path: '/tabs/tab1' })
    }

</script>