# CHANGELOG

- [CHANGELOG](#changelog)
    - [IA-001](#ia-001)
    - [feature-core\IA-002](#feature-coreia-002)
    - [feature-navbar\IA-003](#feature-navbaria-003)
    - [feature-core\IA-004](#feature-coreia-004)
    - [feature-navbar\IA-005](#feature-navbaria-005)
    - [Pending as of feature-navbar\IA-005](#pending-as-of-feature-navbaria-005)


### IA-001

2020-06-24

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

[Back to commit details](#changelog)

### feature-core\IA-002

2020-06-24

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

[Back to ToC](#changelog)

### feature-navbar\IA-003

2020-06-25

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

[Back to ToC](#changelog)

### feature-core\IA-004

2020-07-04

1. Added new theme
2. Removed deprecated dependency `@ngrx/core`
3. Modified `index.html`
   - Removed `mat-icon` CDN
   - Removed `mat-typography`
   - Added `mat-app-background`
4. Implemented root and feature states
5. Added component `ia-app`
6. `ia-state` folder inside `common` directory is no longer useful
7. `ia-state` is now refactored to use one single `index.ts` to hold router state throughout the application
8. Each module would have `state` folder to hold relevant data
9. Separated `FontAwesomeModule` as `IaFontAwesomeModule`
10. Moved `IaMaterialModule` into `modules/ia-core/modules`
11. Merge conflict with `feature/navbar` resolved

[Back to ToC](#changelog)

### feature-navbar\IA-005

2020-07-05

1. Standardized `CHANGELOG.md` commit messages
   - Updated missed catchup merge, hence some initial commit messages might be incorrect
2. Modified import of `purple-green` prebuilt theme and updated it with light and dark theme using `theme.scss`
3. Refactored and organized imports for many `*.ts` files
4. Updated `common` folder
   - Moved `ia-state` from `src` to `common`
   - Added `ia-fa-icon` model
5. Added navbar related entities
   - State
   - Actions
   - Type
   - Reducer
   - Effect
   - Selector
6. Updated `ia-core` service to fetch data from state

[Back to ToC](#changelog)

---

### Pending as of feature-navbar\IA-005

1. Implementation of other components in `core` module
2. Resolve merge conflict of `feature/navbar` with `develop`

[Back to ToC](#changelog)
