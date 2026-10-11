import { defineConfig } from 'cypress';

export default defineConfig({
  video: true,
  videoCompression: 32,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      // Node event listeners for demo video capture
      return config;
    },
  },
});
