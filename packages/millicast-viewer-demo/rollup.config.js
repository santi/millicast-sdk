import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'

import getEnvironment from './env'

const environment = getEnvironment()

export default [
  {
    input: 'src/viewer.js',
    output: {
      name: 'viewer',
      file: 'dist/viewer.umd.js',
      format: 'umd',
      globals: {
        'millicast-sdk-js': 'millicastSdkJs'
      }
    },
    plugins: [
      nodeResolve({ preferBuiltins: false }),
      commonjs({
        include: [/node_modules/, /src/],
        transformMixedEsModules: true
      }),
      injectProcessEnv({
        ...environment
      }),
      babel({
        babelHelpers: 'runtime',
        presets: ['@babel/preset-env'],
        exclude: ['/node_modules/**'],
        plugins: ['@babel/plugin-transform-runtime']
      }),
      terser()
    ]
  }
]
