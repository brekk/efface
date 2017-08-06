const utils = require(`nps-utils`)

// const prepend = curry((toPrepend, file) => `echo "${toPrepend} $(cat ${file})" > ${file}`)
// const append = curry((toAppend, file) => `echo "${toAppend}" >> ${file}`)
// const createWithText = curry((text, file) => `echo "${text}" > ${file}`)
const {
  concurrent: all,
  copy
  series,
  mkdirp
} = utils
const {
  nps: allNPS
} = all

module.exports = {
  scripts: {
    cloneAndTest: {
      script: series(
        mkdirp(`test`),
        copy(`package.json test/.`)
      )
    }
    dependencies: {
      script: `depcheck`,
      description: `check dependencies`
    },
    readme: {
      script: `documentation readme README.md -s "API" src/index.js`,
      description: `regenerate the readme`
    },
    lint: {
      description: `lint both the js and the jsdoc`,
      script: allNPS(`lint.src`, `lint.jsdoc`),
      src: {
        script: `eslint src/*.js`,
        description: `lint js files`
      },
      jsdoc: {
        script: `documentation lint src/index.js`,
        description: `lint jsdoc in files`
      }
    },
    test: {
      description: `run all tests with coverage`,
      script: `nyc nps test.unit`,
      unit: {
        description: `run unit tests`,
        script: `ava src/*.spec.js`
      }
    },
    build: {
      description: `run the main build task`,
      script: `rollup -c config/rollup.config.main.js`
    },
    care: {
      description: `run all the things`,
      script: allNPS(`lint`, `test`, `build`, `readme`)
    },
    precommit: `nps care`
  }
}
