import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    name: 'detectAppInstall', // 挂载到window里的变量名称
    file: 'dist/detectAppInstall.js',
    format: 'umd'
  },
  plugins: [
    babel(),
    production && terser()
  ]
}
