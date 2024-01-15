


https://github.com/cihancil/es_demo/assets/9278709/1c2f6d2b-94a7-40f2-9842-3f6d467780a0



# React Native Esimatic Demo Project

This project aims to demonstrate React Native skills using Esimatic project as an example application. It demonstrates UI design and navigation features and Redux-toolkit state management.  

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [@react-navigation/native] and [@react-navigation/native-stack](https://reactnavigation.org/) for navigation.
- [https://github.com/IsaiaPhiliph/react-native-snap-carousel-v4](https://github.com/luggit/react-native-config) to display carousel cards. 
- [@reduxjs/toolkit] and [react-redux]https://redux-toolkit.js.org/) for state management.
- [@testing-library/react-native](https://callstack.github.io/react-native-testing-library/) for testing.

## Folder structure

- `assets`: Asset folder to store all images, icons.
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that used through app.
  - `data`: Folder to store any kind of constant data.
  - `stores`: This folder contains all stores and reducers that needed by redux-toolkit.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all application screens.
  - `App.tsx`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.


## Usage
Make sure dev environment has been set up accordingly https://reactnative.dev/docs/environment-setup/

Run `npm i`, `cd ios && pod install && cd ..` and `npx react-native run-ios` inside the root folder.

## Tests
Run `npm run test` inside the root folder.

# ⚠️ Notes
- The project is only tested for iOS. It might or might not need modifications for Android.
- Tests are only covering one component partially to demonstrate purpose of how tests can be implemented.


