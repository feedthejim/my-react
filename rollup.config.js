import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

// rollup.config.js
export default {
  input: 'src/myReact.js',
  output: {
    file: 'dist/myReact.js',
    name: 'myReact',
    format: 'iife',
    sourceMap: 'inline',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        'react',
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
          'transform-react-jsx',
          'transform-object-rest-spread',
          'external-helpers',
      ],
    }),
  ],
};
