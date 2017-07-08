import chalk from 'chalk'
import {
  // $,
  // I,
  curry
} from 'katsu-curry'
import {
  // sideEffect,
  xtrace
} from 'xtrace'
import {e0, e1, e2} from 'entrust'

export const {freeze, keys} = Object

// console
const {log: _log, error: _error} = console
// const {red, green} = chalk

export const log = _log.bind(console)
export const error = _error.bind(console)

// loggers
// export const good = sideEffect(log, $, green)
export const good = xtrace(log)
// export const bad = sideEffect(error, $, red)
export const bad = xtrace(error)

// monads
export const ap = e1(`ap`)
export const bimap = e2(`bimap`)

// future
// x[fork](a, b)
export const fork = e2(`fork`)

// json
export const j2 = (x) => JSON.stringify(x, null, 2)

// strings
export const replace = e2(`replace`)
export const hasString = curry((y, x) => x && x.indexOf && x.indexOf(y) > -1)
export const lastPast = curry((lastRef, str) => str.substr(str.lastIndexOf(lastRef) + 1))
export const toLowerCase = e0(`toLowerCase`)
