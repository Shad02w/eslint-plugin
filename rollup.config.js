import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'

/** @type {import('rollup').RollupOptions} */
const config = {
    input: path.join(__dirname, './src/index.ts'),
    output: {
        file: path.join(__dirname, './build/index.js'),
        format: 'commonjs'
    },
    external: ['eslint', /^eslint-.*/],
    plugins: [
        // Find modules using Node Resolution algorithm
        nodeResolve({ extensions: ['.ts', '.js'] }),
        // Convert CommonJS module to ES6
        commonjs(),
        // Transpile typescript with
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'ES2015',
                    declaration: false
                }
            }
        }),
        copy({
            targets: [{ src: 'package.json', dest: 'build' }]
        })
    ]
}

export default config
