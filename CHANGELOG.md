# CHANGELOG of all the commits



## Commit Detail

| Commit Message            | Date       | Description                                     |
| ------------------------- | ---------- | ----------------------------------------------- |
| **IA-001**                | 2020-06-24 | [IA-001](#ia-001)                               |
| **feature-core\IA-002**   | 2020-06-24 | [feature-core\IA-002](#feature-core\ia-002)     |
| **feature-navbar\IA-003** | 2020-06-25 | [feature-navbar\IA-003](#feature-navbar\ia-003) |

## Commit Description

#### IA-001

1. Initial Commit
2. `ng new itinerary-assistant`
   - Routing enabled
   - Default Stylesheet - `SCSS`
3. Dependencies
   - `@angular/material`
   - `@fortawesome/angular-fontawesome`
   - `@fortawesome/fontawesome-svg-core`
   - `@fortawesome/free-brands-svg-icons`
   - `@fortawesome/free-regular-svg-icons`
   - `@fortawesome/free-solid-svg-icons`
   - `@ngrx/core`
   - `@ngrx/effects`
   - `@ngrx/entity`
   - `@ngrx/router-store`
   - `@ngrx/store-devtools`
   - `@ngrx/store`
   - `webpack-bundle-analyzer`
4. Firebase
   - Config setup in `environment.ts`

[Back to commit details](#commit-detail)

#### feature-core\IA-002

1. Added `CHANGELOG.md`
2. Added dependencies
   - `@angular/fire`
   - `firebase`
3. Updated `README.md` with development environment details
4. Setup below entities in the app
   -  Dummy `ngrx` schematics in the `core` module which might be redundant later
   -  `ia-material-module` for Angular Material
   -  Angular Material and FontAwesome in `ia-core` module
   -  Basic Routing
   -  `ia-home` and `ia-navbar` placeholder components
   -  `ia-core` placeholder service
8. Updated `tsconfig.json` to alias namespace for commonly used imports

[Back to commit details](#commit-detail)

#### feature-navbar\IA-003

1. Modified `README.md`
   - Indexed dangling headings
   - Minor fix in heading: `2.2 Create a new branch for development of each feature`
2. Modified commit message format from `IA-xxx:branch_name` to `branch_name\IA-xxx`
3. Modified `index.html`
   - Removed `link`s for `Roboto` font and `Material Icons`
   - Removed `mat-typography` to enable `Fira Sans` throughout the application
   - Added `mat-app-background`
4. Modified `styles.scss`
   - Added import for dark theme (`purple-green.css`)
   - Set global font as `Fira Sans` with `Calibri` fallback
   - Modified to view app in full screen
5. Modified component `ia-home`
   - Removed placeholder code
   - Added reference for navbar
6. Added component `ia-navbar-container`
7. Added component `ia-navbar`
   - Setup to work with asynchronous data using BehaviourSubject
8. Modified service `ia-core`
   - Added method `getAssets()` to provide dummy data stream to navbar

[Back to commit details](#commit-detail)

