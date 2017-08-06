import {curry, curryObjectK} from 'katsu-curry'
import $ from 'inquirer'
import Future from 'fluture'

import pipe from 'ramda/src/pipe'
// import map from 'ramda/src/map'
import zip from 'ramda/src/zip'
import fromPairs from 'ramda/src/fromPairs'

const __nameMessage = [`name`, `message`]

const zipObject = curry((left, right) => pipe(
  zip(left),
  fromPairs
)(right))

const addTypedQuestion = (type) => curryObjectK(
  __nameMessage,
  (question) => ({
    type,
    ...question
  })
)

const messagePairToObject = zipObject(__nameMessage)

export const input = addTypedQuestion(`input`)
export const questionInput = pipe(
  messagePairToObject,
  input
)

export const confirm = addTypedQuestion(`confirm`)
export const questionConfirm = pipe(
  messagePairToObject,
  confirm
)

export const prompt = Future.encaseP($.prompt)
