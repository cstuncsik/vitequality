import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/e2e/specs/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support/e2e.ts',
    videosFolder: 'tests/e2e/videos'
  }
})
