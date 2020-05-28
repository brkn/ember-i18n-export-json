### How to run 

1. To copy all locale.js files with thier original paths run a similiar command like the below.
    - Make sure you clone this repository as a seibling to your target repository. If it is not seibling, edit the paths according to your setup.
    - `cd` into your TARGET directory then run this command. Then come back to this repo directory.
    - I've used `fd` for this. It's an alternative to unix find command. You can install via `brew install fd`. 
        ```sh
        fd locale.js -x sh -c "mkdir -p ../ember-i18n-export-json/{//}; cp {} ../ember-i18n-export-json/{}"
        ```
2. Copy and paste your main locale file where you have all your locale.js imports to `index.js`. Move all imports into the translations object.
3. `npm install`
4. Fix the paths at the scripts at package.json. It needs babel to transpile all `es6 import`.
5. Then run this to have your json
    ```sh
    npm run start > tr.json
    ```
6. Cleanup the other output at the top of your file.
7. Optionally you can run prettier here.