/// <reference types="vitest" />

import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  root: process.cwd(),
  test: {
    include: [`./src/${configDefaults.include[0]}`],
  },
});
