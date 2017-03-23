import babel from 'rollup-plugin-babel';

export default {
  entry: './index.js',
  format: 'cjs',
  plugins: [ babel() ],
  dest: './build/lib.js',
  external: ['deep-eql', 'type-detect']
};
