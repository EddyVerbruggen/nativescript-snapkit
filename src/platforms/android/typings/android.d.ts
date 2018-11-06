/// <reference path="android-declarations.d.ts"/>

declare module org {
  export module nativescript {
    export module plugins {
      export module snapkit {
        export module login {
          export class TNSFetchUserDataCallback {
            public static class: java.lang.Class<org.nativescript.plugins.snapkit.login.TNSFetchUserDataCallback>;

            public onSuccess(param0: com.snapchat.kit.sdk.login.models.UserDataResponse): void;

            public onFailure(param0: boolean, param1: number): void;

            public constructor(param0: org.nativescript.plugins.snapkit.login.TNSFetchUserDataCallbackHandler);
          }
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module plugins {
      export module snapkit {
        export module login {
          export class TNSFetchUserDataCallbackHandler {
            public static class: java.lang.Class<org.nativescript.plugins.snapkit.login.TNSFetchUserDataCallbackHandler>;

            /**
             * Constructs a new instance of the org.nativescript.plugins.snapkit.login.TNSFetchUserDataCallbackHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onLoginSuccess(param0: any): void;
              onLoginFailure(param0: any): void;
            });
            public constructor();

            public onLoginSuccess(param0: any): void;

            public onLoginFailure(param0: any): void;
          }
        }
      }
    }
  }
}

//Generics information:

