import loader from '@monaco-editor/loader'
let Registry = {
  cdn: '//cdn.jsdelivr.net/npm',
}
export var setNpmCDNRegistry = function (registry) {
  Registry.cdn = registry
  loader.config({
    paths: {
      vs: ''.concat(registry, '/monaco-editor@0.43.0/min/vs'),
    },
  })
}
export var getNpmCDNRegistry = function () {
  return String(Registry.cdn).replace(/\/$/, '')
}