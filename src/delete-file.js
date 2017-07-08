import prop from 'ramda/src/prop'

import {prompt, questionConfirm} from './lazy-inquirer'

export default (path) => {
  const question = [
    questionConfirm([`delete`, `Do you want to delete ${path}?`])
  ]
  return prompt(question)
    .map(prop(`delete`))
    // .map(deletePath)
}
