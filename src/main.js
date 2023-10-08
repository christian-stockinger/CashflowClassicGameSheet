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
import GameState from '@/state/GameState'

const app = createApp(App)

app.config.globalProperties.gamestate = new GameState();
app.config.globalProperties.rules = {
  required: value => !!value || 'Required.',
  number: value => !isNaN(value) || 'Zahl eingeben',
  negative: value => Number(value) >= 0 || 'Zahl muss positiv sein',
}

registerPlugins(app)

app.mount('#app')
