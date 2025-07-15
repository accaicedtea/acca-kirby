import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            filename: 'bundle-stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true
        })
    ],
    base: '/acca-test/',
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separa Bootstrap in un chunk dedicato per caching
                    'bootstrap': ['bootstrap'],
                    // Vendor chunk per Vue e router
                    'vendor': ['vue', 'vue-router'],
                    // FontAwesome separato
                    'fontawesome': [
                        '@fortawesome/fontawesome-svg-core',
                        '@fortawesome/free-solid-svg-icons',
                        '@fortawesome/vue-fontawesome'
                    ]
                },
                // Nomi file ottimizzati per caching
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'css/[name]-[hash][extname]';
                    }
                    if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
                        return 'images/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        },
        // Ottimizzazioni per immagini
        assetsInlineLimit: 4096, // 4KB limit
        // Minificazione CSS standard
        cssMinify: true
    },
    // Ottimizzazioni per sviluppo
    optimizeDeps: {
        include: ['bootstrap', 'vue', 'vue-router']
    }
})