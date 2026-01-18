import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 1290,
    viewportWidth: 1080,
     watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://coffee-cart.app/",
    setupNodeEvents(on, config) {
       const cucumber = require('cypress-cucumber-preprocessor').default;
    on('file:preprocessor', cucumber());
  
    },
  },
});
