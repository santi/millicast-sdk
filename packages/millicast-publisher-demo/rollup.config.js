import pkg from './package.json'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import environment from './env'

export default [
  {
    input: 'src/index.js',
    output: {
      name: "publisher",
      file: pkg.browser,
      format: "umd",
      globals: {
        'millicast-sdk-js': 'millicastSdkJs'
      }
    },
    plugins: [
      nodeResolve({ preferBuiltins: false}),
      commonjs({
        include: [/node_modules/, /src/],
        transformMixedEsModules: true ,
      }),
      injectProcessEnv({
        environment
    }),
    ]
  }
]