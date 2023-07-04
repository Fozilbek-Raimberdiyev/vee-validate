import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import setAllComponentGlobalPrimeVue from "./plugins/primevue";
import "primevue/resources/themes/lara-light-teal/theme.css";   
import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css";
const app = createApp(App);

//using primevue
app.use(PrimeVue);
setAllComponentGlobalPrimeVue(app)

//using router
app.use(router)

app.mount("#app");
