import App from './App.vue'
import { createApp } from 'vue'
import { router, setupRouter } from '/@/router'
import { setupStore } from '/@/store'

function bootstrap() {
  const app = createApp(App)

  // Configure routing
  setupRouter(app);

  // Configure store
  setupStore(app);

  app.mount('#app')
}

bootstrap()
