/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import GameState from '@/assets/scripts/GameState'

const app = createApp(App)

app.config.globalProperties.gamestate = new GameState();

registerPlugins(app)

app.mount('#app')
