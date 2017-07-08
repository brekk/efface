# efface

`npm i efface -g`

`yarn add efface global`

A toolset for the lazy.

This is effectively a way of generating breadcrumbs for starter projects, based on an existing codebase.

Let's say you have a library (or someone else does) and you want to be able to copy the basic architectural patterns but don't really care about the specifics of the code.

`efface` will remove most-of-the-things for you, and do some smart rewrites of the existing `package.json`.

Let's say I have an existing module `xtrace` and I want to throw away most-of-the-things and instead name it `ytrace` (in this example I lack any creativity):

`efface shed ytrace`
