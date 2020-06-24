# Itinerary Assistant v3

## 1. Hosting URL
  ---
Hosting URL would be setup later

## 2. Workflow
  ---

### 2.1. Fetch indexes for any updates in remote
```
git fetch
```

### 2.2. Create a new branch for development of each feature
- Create a new branch from `develop` from [GitHub](https://github.com/usama251993/itinerary-assistant)
```
git fetch
git checkout <branch_name>
```

### 2.3. Commit code to newly created branch
- Develop the code
- Ready to commit
```
git commit -m "<commit_message>"
```
- Get the latest code from existing `develop` branch
```
git pull origin develop
```
- Resolve merge conflicts if any
- Commit when conflicts resolved
```
git commit -m "<default_commit_message>" // Merge into https://remote-url from branch <branch_name>
```
- Push to feature branch
```
git push
```

### 2.4. Merge code in `develop` branch
1. Creating Pull Request
   - Update `README.md` each time
   - `New Pull Request` from [here](https://github.com/usama251993/itinerary-assistant/pulls)
   - Verify code changes
   - Mention Reviewers
   - Leave a suitable message
   - Done

2. Merging the code directly into develop *(not recommended)*
```
git checkout develop
git merge origin/<branch_name>
git push
```

### 2.5. Test code in `test` branch
- Fetch the code in `test` branch from `develop` branch
```
git checkout test
git merge origin/develop
```
- Perform tests
- Commit the code when test cases pass
```
git commit -m "<test_commit_message>"
git push
```
- Revert to develop whe test cases fail


### 2.6. Merge into `deploy` branch
- Fetch the code in `deploy` branch from `test` branch
```
git checkout deploy
git merge origin/test
```

### 2.7. Deploy to `firebase`
- Setup `firebase`
- Configure `firebase`
- Deploy to `firebase`
```
firebase deploy
```

## Commit Detail
  ---

| Commit Message | Date       | Description       |
| -------------- | ---------- | ----------------- |
| **IA-001**     | 2020-04-11 | [IA-001](#ia-001) |

## Commit Description
  ---
#### IA-001
1. Initial Commit
2. `ng new itinerary-assistant`
   * Routing enabled
   * Default Stylesheet - `SCSS`
3. Dependencies
   * `@angular/material`
   * `@fortawesome/angular-fontawesome`
   * `@fortawesome/fontawesome-svg-core`
   * `@fortawesome/free-brands-svg-icons`
   * `@fortawesome/free-regular-svg-icons`
   * `@fortawesome/free-solid-svg-icons`
   * `@ngrx/core`
   * `@ngrx/effects`
   * `@ngrx/entity`
   * `@ngrx/router-store`
   * `@ngrx/store-devtools`
   * `@ngrx/store`
4. Firebase
   * Config setup in `environment.ts`

## Pending
  ---
*many things*
