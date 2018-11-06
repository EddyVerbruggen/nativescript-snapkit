# NativeScript Snap Kit plugin

[![NPM version][npm-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-snapkit.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-snapkit
[npm-image]:https://img.shields.io/npm/v/nativescript-snapkit.svg
[npm-url]:https://npmjs.org/package/nativescript-snapkit
[downloads-image]:https://img.shields.io/npm/dm/nativescript-snapkit.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="https://github.com/EddyVerbruggen/nativescript-snapkit/raw/master/media/snapkit.png" height="78px" alt="Snap Kit logo"/><br/>

## What!?
Glad you asked. This repo implements a [NativeScript](https://naivescript.org) plugin for [Snapchat's Snap Kit SDK](https://kit.snapchat.com).
In its first iteration, this plugin only exposes [Login Kit](https://kit.snapchat.com/#login-kit) (arguably the most relevant part of the Snap Kit SDK).

> Feel free to open an issue requesting other features (other parts of the Snap Kit SDK are: Creative Kit, Bitmoji Kit, and Story Kit).

## Installation
```bash
tns plugin add nativescript-snapkit
```

## Configuration
Hop on over to the [Snap Kit developer portal](https://kit.snapchat.com/portal/apps/) and create an app.

### Android
Documentation for setting up iOS is [available here](https://docs.snapchat.com/docs/login-kit/#android), but a lot of it has already been handled by the plugin. You'll need to:
- Open `App_Resources/AndroidManifest.xml` and add the `com.snapchat.kit.sdk.clientId` [as shown here](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/App_Resources/Android/src/main/AndroidManifest.xml#L32).
- While you're there, also add `com.snapchat.kit.sdk.redirectUrl` [as shown here](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/App_Resources/Android/src/main/AndroidManifest.xml#L33).
- And lastly, `com.snapchat.kit.sdk.SnapKitActivity` [as shown here](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/App_Resources/Android/src/main/AndroidManifest.xml#L52-L59) (make sure you adjust that `android:scheme`!).

### iOS
Documentation for setting up iOS is [available here](https://docs.snapchat.com/docs/login-kit/#ios), but a lot of it has already been handled by the plugin. You'll need to:

- Open `App_Resources/Info.plist` and add the `SCSDKClientId` [as shown here](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/App_Resources/iOS/Info.plist#L47-L48).
- While you're there, also add `SCSDKRedirectUrl` [as shown here](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/App_Resources/iOS/Info.plist#L50-L51).
- And lastly, `CFBundleURLTypes` [as shown here](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/App_Resources/iOS/Info.plist#L53-L62).

### iOS startup wiring
When using Login Kit's features on iOS, you will need to [`require` (not `import`) the plugin](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/app.ts#L4) before the [app is bootstrapped](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/demo/app/app.ts#L6).

> Failing to do so will mean Snapchat won't redirect back to your app after logging in.

## Demo app
If you want to test logging in with your own Snapchat login, then the [demo app](/demo) is a good starting point.
However, it only allows logging in with user `eddyverbruggen` so you'll need to update its configuration as mentioned above.

Follow these steps to install the demo app:

```bash
git clone https://github.com/EddyVerbruggen/nativescript-snapkit
cd nativescript-snapkit/src
npm i
# change the configuration, then:
npm run demo.ios # or demo.android
``` 

## API (Login Kit)

### `login`
The `login` function takes a `boolean` parameter (default `false`) indicating whether or not you want the plugin to retrieve [user details](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/src/loginkit/loginkit.d.ts#L1-L5).

```typescript
import { LoginKit } from "nativescript-snapkit";

LoginKit.login(true)
    .then(result => console.log(`Login successful, details: ${JSON.stringify(result)}`))
    .catch(error => console.log(`Login failed. Details: ${error}`));
```

### `isLoggedIn`
This function takes the same `boolean` parameter as `login` (default `false`).
If `false`, this function will return a `boolean`. Otherwise it will return [user details](https://github.com/EddyVerbruggen/nativescript-snapkit/blob/389f99325fb245796c89ed84235f78223fdce196/src/loginkit/loginkit.d.ts#L1-L5) in case the user was indeed logged in, or `false` if he was not logged in.

```typescript
import { LoginKit } from "nativescript-snapkit";

// use it either like this (no parameter, or 'false')
LoginKit.isLoggedIn()
    .then(loggedIn => console.log(`User was logged in? ${loggedIn}`));

// or use it like this, to get the details (in case the user was indeed logged in)
LoginKit.isLoggedIn(true)
    .then(result => {
      if (!result) {
        console.log(`User was not logged in.`);
      } else {
        console.log(`User was logged in. User details: ${JSON.stringify(result)}`)
      }
    });
```

### `logout`

```typescript
import { LoginKit } from "nativescript-snapkit";

LoginKit.logout()
    .then(() => console.log("Logged out"));
```
