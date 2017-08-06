import figlet from 'figlet'
import F from 'fluture'

export const figgy = (figText) => new F(
  (bad, good) => (
    figlet(figText, `Standard`, (e, x) => (
      e ? bad(e) : good(x)
    ))
  )
)
