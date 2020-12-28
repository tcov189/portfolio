import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { FontAwesomeIcon } from '@/plugins/font-awesome'

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

// Register global components
const files = require.context('./components/global', true, /\.vue$/i);
files.keys().map((key) => app.component(key.split('/').pop().split('.')[0], files(key).default));


app.mount('#app');
