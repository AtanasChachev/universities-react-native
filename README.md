**WARNING!**
This branch is using `axios` alongside with plain `redux` / `react-redux` for data state management. The `main` branch uses `react-query` with `zustand`.

**Requirements**

* `node version:`  **v14.9.0**
* `npm version:` **6.14.8**
* `CocoaPods:` **1.10.1**
* `Ruby:` **ruby 2.6.3p62**
* `RubyGems:` **3.1.2**
* `Yarn:` **1.22.10**
 

<br />

------

<br />

**For iOS**

1. `yarn` to install the dependencies.
2. `cd ios`
3. `pod install && cd ..`
4. `npx react-native start` to start the metro bundler.
5. `npx react-native run-ios` this should automatically start the iOS Simulator and the run the app , if that doesn't work try to open the `ios` folder and  run it manually from there.

<br />

* *If you experience while running the **pod install** please try **pod install repo-update** or first **pods deintegrate** and then again **pod install***


<br />

------

<br />

**For Android**

1. `yarn` to install the dependencies.
2. `npx react-native start` to start the metro bundler.
3. `npx react-native run-android`

<br />

------

<br />

**Project Structure**

```
- assets
  - images 
    * Here you can insert your local images and then add it as exportable in the index.ts file, you can find an example in Navigation Component)

- components 
  * Here you can build your reusable components, e.g Button, Chip, Card components and etc..)

- config 
  * Here you can enter your settings that will be used across the app, e.g timeouts, some other specific configs. Please note that configs like API Urls and other private things should be entered in the '.env' file and used within Config that comes from react-native-config package)

- pages
  * Here you can create your app pages, please note that pages are created into a folders, that's because one page can have multiple 'sub pages' so it can be easier to find those sub pages. All the pages are exported from the index.ts file.

- services
  * Here you can create your API Provide / Services endpoints. You can inherit the structure from the 'api-service.ts'.

- store 
  * Here you can creater your actions / constants / reducers. Please check the `todos.ts` files for example how to use the redux store and manage data inside the app.

- styles
  * Here you can create your global styles. Each component / page can / should have their own `StyleeSheet.create({})` but here you can create the styles that are most common used / repetitive in the app, for example `{ flex: 1, justifyContent: 'center', alignItems: 'center' }` in order to avoid the same code across multiple places.

- models
  * Here you can create the types for your components / pages / settings and etc... for the components / pages types you can create folders.

- utils
  * Here you can use any utilisation functions / packages like AsyncStorage (as its in the example), also packages like moment.js that are formatting the date and etc..

- Startup.tsx
  * That's the initial screen so here you can apply the logic if the user is logged / non logged which page to show.

```