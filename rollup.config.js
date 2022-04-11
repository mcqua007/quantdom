import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  plugins: [
    terser({
      //   mangle: {
      //     properties: {
      //       regex: /els/, //mangles this.els
      //     },
      //   },
    }),
    filesize(),
  ],
  output: {
    sourcemap: true, //can pass 'inline' for inline source maps
    file: 'dist/quantdom.min.js',
    format: 'umd',
    name: '$',
  },
};
