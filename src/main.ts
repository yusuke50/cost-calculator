import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
library.add(faCircleXmark);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
