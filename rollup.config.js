import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    // CommonJS
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    // ES
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript()
  ],
};
