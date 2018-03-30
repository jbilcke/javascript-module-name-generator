
const A = [
  '',
  'optimize',
  '',
  'extract',
  '',
  'concat',
  '',
  'bundle',
  '',
  'bind',
  '',
  'build',
  '',
  'attach',
  '',
  'split',
  '',
  'detect',
  '',
  'extend',
  '',
  'load',
  '',
  'export',
  '',
  'enforce',
]
const B = [
  '',
  '',
  'immutable',
  '',
  '',
  'persistent',
  '',
  '',
  'legacy',
  '',
  ''
]
const C = [
  '',
  '',
  '',
  'async',
  '',
  '',
  '',
  '',
  'isomorphic',
  '',
  '',
  '',
]
const D = [
  '',
  '',
  '',
  '',
  '', 'babel',
  '', 'parcel',
  '', 'npm',
  '', 'web',
  'webpack',
  'scalajs',
  'node',
  'react', 
  'redux',
  'saga',
  'mobx',
  'baobab',
  'database',
  'angular',
  'typescript',
  'elm',
  'purescript',
  'styled',
  'emoji',
  '',
  '',
  '',
  '',
]
const E = [
  'login',
  'translation',
  'a11y',
  'i18n',
  'security',
  'state',
  'test',
  'server',
]
const F = [
  '',
  'cookie',
  'portal',
  'session',
  'context',
  'state',
  'template',
  'stream',
  ''
]
const G = [
  '',
  '',
  '',
  'view',
  'controller',
  'middleware',
  'plugin',
  'component',
  'container',
  'renderer',
  'connector',
  'builder',
  'compiler',
  'router',
  'prefixer',
  'reloader',
  'engine',
  'client',
  'reducer',
  'action',
  'tree',
  '',
  '',
  '',
]

const H = [
  '',
  'module',
  '',
  '',
  '',
  'dispatcher',
  '',
  '',
  'linter',
  '',
  '',
  'validator',
  '',
  ''
]

function get(words) {
  return words[Math.floor(Math.random() * words.length)]
}

module.exports = function generate() {
  return [
    get(A),
    get(B),
    get(C),
    get(D),
    get(E),
    get(F),
    get(G),
    get(H),
  ].filter(function(x){ return x !== ''}).join('-')
}

