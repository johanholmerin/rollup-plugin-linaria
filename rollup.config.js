import babel from 'rollup-plugin-babel';
import linaria from './index.js';
import css from 'rollup-plugin-css-only'

export default {
  input: 'test.js',
  output: {
    file: 'build/test.js',
    format: 'es'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-transform-react-jsx']
    }),

    linaria({
      sourceMap: process.env.NODE_ENV !== 'production'
    }),
    css()
  ],
  external: ['react', 'linaria/react']
};
