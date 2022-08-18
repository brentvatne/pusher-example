# @pusher/pusher-websocket-react-native in an Expo app

This library includes [native code](https://docs.expo.dev/workflow/customizing/) that doesn't ship in Expo SDK / Expo Go, so to use it we can [create a development build with EAS Build](https://docs.expo.dev/workflow/customizing/#adding-custom-native-code-with-development-builds) or [run prebuild to generate the native code and compile it locally](https://docs.expo.dev/workflow/customizing/#generate-native-projects-with-prebuild).

To use this example, create your project on the Pusher dashboard and configure the `apiKey` and `cluster` in **App.tsx**. Sign in to your Expo account and run `eas build -p all --profile development`, or to compile locally run `expo run:ios` and/or `expo run:android`, which will run [prebuild](https://docs.expo.dev/workflow/prebuild/) automatically.

Note: this library requires a minimum iOS deployment target of 13.0, so we need to set this using `expo-build-properties` in **app.json**. We also need to set the `kotlinVersion` for Android. This is all that is needed beyond installing the library in order to get it to work.
