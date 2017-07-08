import globby from 'globby'
// import del from 'del'
import F from 'fluture'
import L from 'partial.lenses'
import readPkgUp from 'read-pkg-up'
// import {trace} from 'xtrace'
import {curry} from 'katsu-curry'

import map from 'ramda/src/map'
import reduce from 'ramda/src/reduce'
import K from 'ramda/src/always'
import uniq from 'ramda/src/uniq'
import pipe from 'ramda/src/pipe'

import {questionInput, prompt, questionConfirm} from './lazy-inquirer'
import {bad, good, fork, ap, replace, j2, hasString, lastPast, toLowerCase} from './utils'
import {CONFIG} from './constants'

const R__ = {"@@functional/placeholder": true}

const readPkgUpF = F.encaseP(readPkgUp)
const globbyF = F.encaseP(globby)
// const rimraF = F.encaseP(del)

const questions = {
  inputs: map(questionInput, [
    [CONFIG.PROJECT, `What's the name of your project?`]
  ]),
  confirmations: map(questionConfirm, [
    [CONFIG.ERASE.SRC, `Wanna erase src?`],
    [CONFIG.ERASE.NODE_MODULES, `Wanna erase node_modules?`],
    [CONFIG.ERASE.PKG_DEPENDENCIES, `Wanna erase package.json.peerDependencies?`],
    [CONFIG.ERASE.PKG_DEV_DEPENDENCIES, `Wanna erase package.json.devDependencies?`],
    [CONFIG.ERASE.PKG_PEER_DEPENDENCIES, `Wanna erase package.json.dependencies?`]
  ])
}

const allQuestions = [
  ...questions.inputs,
  ...questions.confirmations
]

const grabUpToFirstSlash = (x) => x.substr(0, x.indexOf(`/`))

const grabEveryUniqueDirectory = pipe(
  map(grabUpToFirstSlash),
  uniq
)

const allFoldersF = K(
  globbyF([`*/*`, `!node_modules/*`])
  .map(grabEveryUniqueDirectory)
)

const writePkgName = L.modify([`package`, `name`])

const whenOldNameIsPresent = (oldName) => L.when(hasString(oldName))
const pkgPropsRewrite = curry(
  (oldName, replacer) => L.modify([
    `package`,
    L.values,
    whenOldNameIsPresent(oldName)
  ], replacer)
)
const pkgPropsNestedRewrite = curry(
  (oldName, replacer) => L.modify([
    `package`,
    L.values,
    L.values,
    whenOldNameIsPresent(oldName)
  ], replacer)
)
const pkgPropsModifyArrays = L.modify(
  [
    `package`,
    L.values,
    L.values,
    L.when(Array.isArray),
    L.elems
  ]
)
const grabFromConfig = curry((key, o) => L.collectAs(
  (x, i) => i,
  [
    `config`,
    L.values,
    L.when((x, i) => (hasString(key, i) && x))
  ],
  o
))

const removeFromPackage = curry((erasers, obj) => reduce(
  (p, e) => L.remove([`package`, lastPast(`:`, e)], p),
  R__,
  erasers
)(obj))

const grabCleanName = pipe(
  L.get([`config`, CONFIG.PROJECT]),
  toLowerCase,
  replace(/\s/g, `-`)
)

const rewritePackageJSON = (o) => {
  const OLD_NAME = L.get([`package`, `name`], o)
  const NEW_NAME = grabCleanName(o)
  const NAME_FN = K(NEW_NAME)
  const fixName = replace(OLD_NAME, NEW_NAME)
  const erasers = grabFromConfig(`erase:pkg`, o)
  return pipe(
    removeFromPackage(erasers),
    writePkgName(NAME_FN),
    pkgPropsRewrite(OLD_NAME, fixName),
    pkgPropsNestedRewrite(OLD_NAME, fixName),
    pkgPropsModifyArrays(fixName)
  )(o)
}

const efface = pipe(
  F.of,
  ap(readPkgUpF()),
  ap(allFoldersF()),
  ap(prompt(allQuestions)),
  map(rewritePackageJSON),
  map(j2),
  fork(bad(`🔥`), good(`✨`))
)

const consumer = curry(
  ({pkg}, directories, config) => ({
    package: pkg,
    directories,
    config
  })
)

efface(consumer)
