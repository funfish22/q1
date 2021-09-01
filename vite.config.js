import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

export default defineConfig({
    build: {
        outDir: 'build',
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@route': path.resolve(__dirname, './src/route'),
            '@page': path.resolve(__dirname, 'src/pages'),
            '@reducers': path.resolve(__dirname, './src/serviceCenter/store'),
            '@components': path.resolve(__dirname, './src/resources/components'),
        },
    },
    plugins: [
        reactRefresh({
            parserPlugins: ['classProperties', 'classPrivateProperties'],
        }),
    ],
});
