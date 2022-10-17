import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {autoAnimatePlugin} from "@formkit/auto-animate/vue"
import './assets/tailwind.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faArrowUpRightFromSquare);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(autoAnimatePlugin)
  .use(router)
  .mount('#app')
