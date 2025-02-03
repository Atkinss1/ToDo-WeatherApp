import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    supportFile: 'cypress/support/component.js',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
