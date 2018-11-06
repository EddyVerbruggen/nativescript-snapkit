import * as app from "tns-core-modules/application";
import { TNSSnapKitLoginKitResult } from "./loginkit";

declare const com, org: any;

export function isLoggedIn(fetchUserData?: boolean): Promise<boolean | TNSSnapKitLoginKitResult> {
  return new Promise((resolve, reject) => {
    const loggedIn: boolean = com.snapchat.kit.sdk.SnapLogin.isUserLoggedIn(app.android.foregroundActivity || app.android.startActivity);
    if (loggedIn && fetchUserData) {
      getUserData(resolve, reject);
    } else {
      resolve(loggedIn);
    }
  });
}

export function login(fetchUserData?: boolean): Promise<TNSSnapKitLoginKitResult> {
  return new Promise((resolve, reject) => {
    const onLoginStateChangedListener = new com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener({
      onLoginSucceeded: () => {
        if (fetchUserData) {
          getUserData(resolve, reject);
        } else {
          resolve();
        }
      },

      onLoginFailed: () => {
        reject();
      },

      onLogout: () => {
        console.log(">> onLogout");
      }
    });

    com.snapchat.kit.sdk.SnapLogin.getLoginStateController(app.android.foregroundActivity || app.android.startActivity).addOnLoginStateChangedListener(onLoginStateChangedListener);
    com.snapchat.kit.sdk.SnapLogin.getAuthTokenManager(app.android.foregroundActivity || app.android.startActivity).startTokenGrant();
  });
}

export function logout(): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log(com.snapchat.kit.sdk.SnapLogin.getAuthTokenManager(app.android.foregroundActivity || app.android.startActivity).revokeToken());
    // SCSDKLoginClient.unlinkCurrentSessionWithCompletion(loggedOut => resolve(loggedOut))
    resolve();
  });
}

function getUserData(resolve, reject): void {
  const query = "{me{displayName, bitmoji{avatar}, externalId}}";

  const fetchUserDataCallbackHandler = new org.nativescript.plugins.snapkit.login.TNSFetchUserDataCallbackHandler({
    onLoginSuccess: (response: any /* com.snapchat.kit.sdk.login.models.UserDataResponse */) => {
      console.log(">> onLoginSuccess: " + response);
      if (response && response.getData()) {
        const me = response.getData().getMe();
        if (me === null) {
          reject("Failed to get userdata");
          return;
        }

        resolve(<TNSSnapKitLoginKitResult>{
          displayName: me.getDisplayName(),
          externalId: me.getExternalId(),
          avatar: me.getBitmojiData().getAvatar(),
        });
      }
    },
    onLoginFailure: (isNetworkError: boolean, statusCode: number) => {
      console.log(">> onLoginFailure, isNetworkError: " + isNetworkError);
      console.log(">> onLoginFailure, statusCode: " + statusCode);
      reject(statusCode);
    }
  });

  com.snapchat.kit.sdk.SnapLogin.fetchUserData(
      app.android.foregroundActivity || app.android.startActivity,
      query,
      null,
      new org.nativescript.plugins.snapkit.login.TNSFetchUserDataCallback(fetchUserDataCallbackHandler)
  );
}
