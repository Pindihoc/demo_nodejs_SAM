import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ['./vitest.setup.js'],
        globals: true, // Enables global test functions like `expect()`, `it()`, `describe()`
        environment: "node",
        testTimeout: 30000,
    }
});