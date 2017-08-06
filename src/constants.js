import {freeze} from './utils'

/* istanbul ignore next */
export const CONFIG = freeze({
  PROJECT: `input:project`,
  ERASE: {
    SRC: `erase:dir:src`,
    NODE_MODULES: `erase:dir:node-modules`,
    PKG_DEPENDENCIES: `erase:pkg:dependencies`,
    PKG_DEV_DEPENDENCIES: `erase:pkg:devDependencies`,
    PKG_PEER_DEPENDENCIES: `erase:pkg:peerDependencies`
  },
  GENERATE: {
    README: `generate:readme`
  }
})
