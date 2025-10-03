import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

const isProd = process.env.BUILD_MODE === 'prod'
export default defineConfig({
  plugins: [
    react(), 
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 优化构建性能
    rollupOptions: {
      output: {
        manualChunks: {
          // 将大的第三方库分离成单独的chunk
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react']
        }
      }
    },
    // 使用默认的esbuild压缩，速度更快
    minify: 'esbuild',
    // 设置chunk大小限制
    chunkSizeWarningLimit: 1000
  },
  // 优化开发服务器
  server: {
    // 预加载模块
    warmup: {
      clientFiles: ['./src/App.tsx', './src/main.tsx']
    }
  }
})

