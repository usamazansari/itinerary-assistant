# CHANGELOG of all the commits



## Commit Detail

| Commit Message          | Date       | Description                                 |
| ----------------------- | ---------- | ------------------------------------------- |
| **IA-001**              | 2020-06-24 | [IA-001](#ia-001)                           |
| **IA-002:feature-core** | 2020-06-24 | [IA-002:feature-core](#ia-002:feature-core) |

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

#### IA-002:feature-core

1. Added `CHANGELOG.md`
2. Added dependencies
   * `@angular/fire`
   * `firebase`
3. Updated `README.md` with development environment details
4. Setup
   -  Dummy `ngrx` schematics in the `core` module which might be redundant later
   -  `ia-material-module` for Angular Material
   -  Angular Material and FontAwesome in `ia-core` module
   -  Basic Routing
   -  `ia-home` and `ia-navbar` placeholder components
   -  `ia-core` placeholder service
8. Updated `tsconfig.json` to alias namespace for commonly used imports
