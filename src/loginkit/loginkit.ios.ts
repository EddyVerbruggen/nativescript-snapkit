import * as app from "tns-core-modules/application";
import { TNSSnapKitLoginKitResult } from "./loginkit";

export class SnapKitAppDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationOpenURLOptions(application, url, options): boolean {
    return SCSDKLoginClient.applicationOpenURLOptions(application, url, options);
  }
}

// play nice with any delegate functions that may have already been set,
// we expect others to do the same with ours
if (app.ios.delegate) {
  if (app.ios.delegate.applicationOpenURLOptions) {
    // call our function, then super
    const orig = app.ios.delegate.applicationOpenURLOptions;
    app.ios.delegate.applicationOpenURLOptions = (application, url, options): boolean => {
      if (SCSDKLoginClient.applicationOpenURLOptions(application, url, options)) {
        return true;
      }
      return orig(application, url, options);
    };
  } else {
    app.ios.delegate.applicationOpenURLOptions = (application, url, options): boolean => {
      return SCSDKLoginClient.applicationOpenURLOptions(application, url, options);
    };
  }
} else {
  app.ios.delegate = SnapKitAppDelegate;
}

export function isLoggedIn(fetchUserData?: boolean): Promise<boolean | TNSSnapKitLoginKitResult> {
  return new Promise((resolve, reject) => {
    const loggedIn = SCSDKLoginClient.isUserLoggedIn;
    resolve(loggedIn);
  });
}

export function login(fetchUserData?: boolean): Promise<TNSSnapKitLoginKitResult> {
  return new Promise((resolve, reject) => {
    SCSDKLoginClient.loginFromViewControllerCompletion(
        app.ios.rootController,
        (loggedIn: boolean, error: NSError) => {
          if (error) {
            reject(error.localizedDescription);
          } else if (!loggedIn) {
            reject();
          } else if (fetchUserData) {
            getUserData(resolve, reject);
          } else {
            resolve();
          }
        }
    );
  });
}

export function logout(): Promise<any> {
  return new Promise((resolve, reject) => {
    SCSDKLoginClient.unlinkCurrentSessionWithCompletion(loggedOut => resolve(loggedOut));
  });
}

function getUserData(resolve, reject): void {
  const query = "{me{displayName, bitmoji{avatar}, externalId}}";
  const dic: any = NSMutableDictionary.new();
  dic.setObjectForKey("bitmoji", "page");

  SCSDKLoginClient.fetchUserDataWithQueryVariablesSuccessFailure(
      query,
      dic,
      (resources: NSDictionary<any, any>) => {
        const data: NSDictionary<any, any> = resources.valueForKey("data");
        const me: NSDictionary<any, any> = data.valueForKey("me");
        const bitmoji: NSDictionary<any, any> = me.valueForKey("bitmoji");

        resolve(<TNSSnapKitLoginKitResult>{
          displayName: me.valueForKey("displayName"),
          externalId: me.valueForKey("externalId"),
          avatar: bitmoji.valueForKey("avatar"),
        });
      },
      (error, bool) => {
        reject(error.localizedDescription);
      });
}