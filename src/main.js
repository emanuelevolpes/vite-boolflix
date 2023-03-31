import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarLight } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHotjar } from '@fortawesome/free-brands-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStar, faStarLight, faHouse, faHotjar, faCompass, faTv, faHeart)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')