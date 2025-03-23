import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
import  piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
// Import Font Awesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import Komponen Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import Ikon Login & Register
import { faSignInAlt, faRightToBracket, faUserPlus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt, faRightToBracket, faUserPlus, faEye, faEyeSlash)

// addIcons(FaFlag, RiZhihuFill);
import {createPinia} from "pinia"
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.component(
    // "v-icon", OhVueIcon, 
    'font-awesome-icon', FontAwesomeIcon
);
app.use(createPinia())
app.use(router)

app.mount('#app')
