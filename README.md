### How to run 

1. To copy all locale.js files with thier original paths run a similiar command like the below.
  - Make sure you clone this repository as a seibling to your target repository. If it is not seibling, edit the paths accorrding to your setup.
  - Move to your TARGET directory then run this command. Then come back to this repo dirrectory.
  - I've used `fd` for this. It's an alternative to unix find command. You can install via `brew install fd`. 

    ```sh
    fd locale.js -x sh -c "mkdir -p ../json-builder/{//}; cp {} ../json-builder/{}"
    ```

1. Copy and paste your main locale file where you have all your locale.js imports to `index.js`. Move all imports into the translations object.

1. `npm install`
1. Fix the paths at the scripts at package.json. It needs babel to transpile all es6 imporrtr logic.
1. Then run this to have your json

    ```sh
    npm run start > tr.json
    ```
