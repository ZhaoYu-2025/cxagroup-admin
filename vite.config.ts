import vue from '@vitejs/plugin-vue';
import type { UserConfig, ConfigEnv } from 'vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { generateModifyVars } from './build/generate/generateModifyVars';
// import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {

  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    base: './', // 设置打包路径
    server: {
      host: '0.0.0.0', // 设置服务器监听地址
      port: 5001, // 设置服务器端口
      cors: true, // 设置是否跨域
      open: true, // 设置是否自动打开浏览器
      
      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  };
});
