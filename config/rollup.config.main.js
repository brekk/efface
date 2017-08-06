const base = require(`./rollup.config.base`)
/* eslint-disable fp/no-mutating-assign */
module.exports = Object.assign(base, {
  entry: `src/index.js`,
  targets: [
    {
      dest: `efface.js`,
      format: `cjs`
    }
  ]
})
/* eslint-enable fp/no-mutating-assign */
