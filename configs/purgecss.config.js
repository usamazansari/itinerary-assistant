module.exports = {
  content: ['./dist/apps/ui/index.html', './dist/apps/ui/*.js'],
  css: ['./dist/apps/ui/*.css'],
  safelist: [/(xs|sm|md|lg|xl|focus|hover|dark):*/],
  output: './dist/apps/ui',
  fontFace: true,
  keyFrames: true,
  variables: true,
  rejected: true
};
