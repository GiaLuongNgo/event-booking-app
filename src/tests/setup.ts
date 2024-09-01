import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

// This will run after each test to clean up the DOM
afterEach(() => {
  cleanup();
});