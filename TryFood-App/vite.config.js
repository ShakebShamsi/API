import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],

   server: {
      proxy: {
         '/api': {
            target: 'https://www.swiggy.com',
            changeOrigin: true,
            secure: true,

            rewrite: (path) => path.replace(/^\/api/, ''),

            configure: (proxy) => {
               proxy.on('proxyReq', (proxyReq, req) => {
                  console.log('➡️ Swiggy request:', proxyReq.path);
                  console.log('➡️ Headers:', proxyReq.getHeaders());
               });

               proxy.on('proxyRes', (proxyRes, req) => {
                  console.log('⬅️ Swiggy response:', proxyRes.statusCode);
                  console.log('⬅️ Headers:', proxyRes.headers);
               });
            },
         },
      },
   },
});
