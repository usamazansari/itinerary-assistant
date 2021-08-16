const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/api',
    '<rootDir>/apps/ui',
    '<rootDir>/libs/api/core',
    '<rootDir>/libs/shared',
    '<rootDir>/libs/ui/core',
    '<rootDir>/libs/ui/layout',
    '<rootDir>/libs/ui/shared/elements',
    '<rootDir>/libs/ui/shared/icon',
    '<rootDir>/libs/ui/shared/material',
    '<rootDir>/libs/ui/shared/tailwind'
  ]
};
