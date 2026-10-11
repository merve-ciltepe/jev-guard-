// Cypress E2E Support File
import './commands';

// Prevent uncaught exceptions from failing Cypress tests
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
