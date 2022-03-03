const {
  createGlobPatternsForDependencies
} = require('@nrwl/angular/tailwind');
const { join } = require('path');
const SharedTWConfig = require('../../../../shared/styles/tailwind.config');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  presets: [SharedTWConfig]
};
