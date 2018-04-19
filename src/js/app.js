import { docReady } from './modules/utilities';

class App {
  constructor() {
    this.addEventListeners();
    this.addInitializers();
  }

  addEventListeners() {
    // Initialisation based event listeners
  }

  addInitializers() {
    // Initialisation based function calls
  }
}

docReady(() => {
  const app = new App();
});
