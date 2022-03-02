const {
  createGlobPatternsForDependencies
} = require('@nrwl/angular/tailwind');
const { join } = require('path');
const AppTWConfig = require('../../libs/shared/styles/tailwind.config');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  presets: [AppTWConfig]
};
