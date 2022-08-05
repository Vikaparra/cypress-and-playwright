const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 760,
  viewportWidth: 1080,

  env: {
    baseUrl: "http://localhost:3000",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
