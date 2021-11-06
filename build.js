const alias = require('esbuild-plugin-alias');
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    format: 'iife',
    bundle: true,
    outfile: 'dist/index.js',
    inject: ['./process-shim.js'],
    define: {
      __dirname: JSON.stringify(__dirname),
    },
    plugins: [
      NodeModulesPolyfillPlugin(),
      alias({
        '@prisma/client': require.resolve('@prisma/client'),
      }),
    ],
  })
  .catch(() => process.exit(1));
