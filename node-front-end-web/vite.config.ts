import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import alias from '@rollup/plugin-alias';
import path from 'path';

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: 'assets',
          replacement: path.resolve(projectRootDir, 'src/assets'),
        },
        {
          find: 'hooks',
          replacement: path.resolve(projectRootDir, 'src/hooks'),
        },
        {
          find: 'components',
          replacement: path.resolve(projectRootDir, 'src/components'),
        },
        {
          find: 'config',
          replacement: path.resolve(projectRootDir, 'src/config'),
        },
        {
          find: 'pages',
          replacement: path.resolve(projectRootDir, 'src/pages'),
        },
        {
          find: 'services',
          replacement: path.resolve(projectRootDir, 'src/services'),
        },
        {
          find: 'store',
          replacement: path.resolve(projectRootDir, 'src/store'),
        },
        {
          find: 'utils',
          replacement: path.resolve(projectRootDir, 'src/utils'),
        },
        {
          find: 'routes',
          replacement: path.resolve(projectRootDir, 'src/routes'),
        },
        {
          find: 'types',
          replacement: path.resolve(projectRootDir, 'src/types'),
        },
        {
          find: 'constants',
          replacement: path.resolve(projectRootDir, 'src/constants'),
        },
        {
          find: 'generated',
          replacement: path.resolve(projectRootDir, 'src/generated'),
        },
      ],
    }),
  ],
});
