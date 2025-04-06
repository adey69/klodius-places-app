# PlacesApp

## Overview

PlacesApp is a React Native application that allows users to explore and view details about various places. It uses modern libraries and tools to provide a seamless user experience.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Create a `.env` file

Before starting the development server, create a `.env` file in the root folder of your project. This file will store your environment variables securely. Add the following line to define your Google Maps API key:

```env
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Replace `your_google_maps_api_key_here` with your actual Google Maps API key. Ensure that the `.env` file is included in your `.gitignore` file to prevent it from being pushed to version control.

For more details on managing environment variables, refer to the [React Native Config documentation](https://github.com/luggit/react-native-config).

## Step 2: Start Metro

Once the `.env` file is set up, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Congratulations! :tada:

You've successfully run the Places App. :partying_face:

## Major Libraries Used

- **React Navigation**: For navigation between screens.
- **Redux**: For state management.
- **Redux Persist**: To persist the Redux store across app restarts.
- **React Native Safe Area Context**: To handle safe area insets for different devices.
- **Reactotron**: For debugging in development mode.
- **Lodash**: A utility library for working with arrays, objects, and other data structures.
- **React Native Config**: For managing environment variables securely.

## Project Structure

- `src/screens`: Contains the screens like `SearchScreen` and `PlaceDetailsScreen`.
- `src/redux`: Contains Redux-related setup and logic.
- `src/theme`: Contains theme-related constants like colors.
- `src/config`: Contains configuration files such as API endpoints and environment variables.
- `src/types`: Contains TypeScript type definitions and interfaces used throughout the app.
- `src/components`: Contains reusable UI components like `Button`, `Card`, and `Header`.

## Secure Practices for API Keys

To ensure the security of sensitive information like the Google Maps API key, the app uses the following practices:

- The API key is stored in a `.env` file, which is included in `.gitignore` to prevent it from being pushed to version control.
- The app utilizes the **React Native Config** library to access environment variables defined in the `.env` file. This allows secure access to the API key in both JavaScript and native code.

For more information on setting up and using React Native Config, refer to the [React Native Config documentation](https://github.com/luggit/react-native-config).
