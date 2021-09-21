import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import del from 'rollup-plugin-delete'
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
        // Clean up outDir
        del({ targets: 'build/*' }),
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
        // Copy package.json
        copy({
            targets: [{ src: 'package.json', dest: 'build' }]
        })
    ]
}

export default config
