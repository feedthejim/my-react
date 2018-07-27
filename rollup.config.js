import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// rollup.config.js
export default {
  entry: 'src/myReact.js',
  dest: 'dist/myReact.js',
  format: 'iife',
  moduleName: 'myReact',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
  ],
};
