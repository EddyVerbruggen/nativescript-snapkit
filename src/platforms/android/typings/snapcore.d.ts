/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class OAuth2Manager extends com.snapchat.kit.sdk.core.networking.AuthTokenManager {
          public static class: java.lang.Class<com.snapchat.kit.sdk.OAuth2Manager>;

          public revokeToken(): void;

          public isUserLoggedIn(): boolean;

          public b(): string;

          public a(param0: globalAndroid.net.Uri): void;

          public hasAccessToScope(param0: string): boolean;

          public a(param0: boolean, param1: com.snapchat.kit.sdk.OAuth2Manager.OnTokenRefreshCallback): void;

          public startTokenGrant(): void;

          public a(param0: globalAndroid.content.Intent): boolean;
          public a(param0: boolean): void;
          public a(): void;
        }

        export module OAuth2Manager {
          export class OnTokenRefreshCallback {
            public static class: java.lang.Class<com.snapchat.kit.sdk.OAuth2Manager.OnTokenRefreshCallback>;

            /**
             * Constructs a new instance of the com.snapchat.kit.sdk.OAuth2Manager$OnTokenRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onTokenRefreshSucceeded(param0: boolean): void;
              onTokenRefreshFailed(param0: boolean): void;
            });
            public constructor();

            public onTokenRefreshSucceeded(param0: boolean): void;

            public onTokenRefreshFailed(param0: boolean): void;
          }

          export class a extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.lang.Void> {
            public static class: java.lang.Class<com.snapchat.kit.sdk.OAuth2Manager.a>;

            public a(param0: native.Array<java.lang.Void>): java.lang.Void;
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class SnapKit {
          public static class: java.lang.Class<com.snapchat.kit.sdk.SnapKit>;

          public static unlink(param0: globalAndroid.content.Context): void;

          public static start(param0: globalAndroid.content.Context): void;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class SnapKitActivity {
          public static class: java.lang.Class<com.snapchat.kit.sdk.SnapKitActivity>;

          public onCreate(param0: globalAndroid.os.Bundle): void;

          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class SnapKitComponent extends com.snapchat.kit.sdk.SnapKitProvidingComponent {
          public static class: java.lang.Class<com.snapchat.kit.sdk.SnapKitComponent>;

          /**
           * Constructs a new instance of the com.snapchat.kit.sdk.SnapKitComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            inject(param0: com.snapchat.kit.sdk.SnapKitActivity): void;
            context(): globalAndroid.content.Context;
            gson(): com.google.gson.Gson;
            authTokenManager(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
            analyticsEventQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;
            operationalMetricsQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;
            apiFactory(): com.snapchat.kit.sdk.core.networking.ClientFactory;
            sharedPreferences(): globalAndroid.content.SharedPreferences;
            logoutController(): com.snapchat.kit.sdk.core.controller.LoginStateController;
            kitEventBaseFactory(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;
            clientId(): string;
            redirectUrl(): string;
          });
          public constructor();

          public context(): globalAndroid.content.Context;

          public apiFactory(): com.snapchat.kit.sdk.core.networking.ClientFactory;

          public kitEventBaseFactory(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;

          public analyticsEventQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;

          public inject(param0: com.snapchat.kit.sdk.SnapKitActivity): void;

          public operationalMetricsQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;

          public logoutController(): com.snapchat.kit.sdk.core.controller.LoginStateController;

          public clientId(): string;

          public sharedPreferences(): globalAndroid.content.SharedPreferences;

          public redirectUrl(): string;

          public gson(): com.google.gson.Gson;

          public authTokenManager(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class SnapKitProvidingComponent {
          public static class: java.lang.Class<com.snapchat.kit.sdk.SnapKitProvidingComponent>;

          /**
           * Constructs a new instance of the com.snapchat.kit.sdk.SnapKitProvidingComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            context(): globalAndroid.content.Context;
            gson(): com.google.gson.Gson;
            authTokenManager(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
            analyticsEventQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;
            operationalMetricsQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;
            apiFactory(): com.snapchat.kit.sdk.core.networking.ClientFactory;
            sharedPreferences(): globalAndroid.content.SharedPreferences;
            logoutController(): com.snapchat.kit.sdk.core.controller.LoginStateController;
            kitEventBaseFactory(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;
            clientId(): string;
            redirectUrl(): string;
          });
          public constructor();

          public context(): globalAndroid.content.Context;

          public apiFactory(): com.snapchat.kit.sdk.core.networking.ClientFactory;

          public kitEventBaseFactory(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;

          public analyticsEventQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;

          public operationalMetricsQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;

          public logoutController(): com.snapchat.kit.sdk.core.controller.LoginStateController;

          public clientId(): string;

          public sharedPreferences(): globalAndroid.content.SharedPreferences;

          public redirectUrl(): string;

          public gson(): com.google.gson.Gson;

          public authTokenManager(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class a {
          public static class: java.lang.Class<com.snapchat.kit.sdk.a>;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module a {
          export class a {
            public static class: java.lang.Class<com.snapchat.kit.sdk.a.a>;

            public a(param0: com.snapchat.kit.sdk.a.a.a, param1: boolean): void;
            public a(param0: string): void;

            public constructor(param0: dagger.Lazy<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>);

            public a(param0: com.snapchat.kit.sdk.a.a.a): void;
          }

          export module a {
            export class a {
              public static class: java.lang.Class<com.snapchat.kit.sdk.a.a.a>;
              public static a: com.snapchat.kit.sdk.a.a.a;
              public static b: com.snapchat.kit.sdk.a.a.a;
              public static c: com.snapchat.kit.sdk.a.a.a;

              public static values(): native.Array<com.snapchat.kit.sdk.a.a.a>;

              public static valueOf(param0: string): com.snapchat.kit.sdk.a.a.a;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class b extends com.snapchat.kit.sdk.SnapKitComponent {
          public static class: java.lang.Class<com.snapchat.kit.sdk.b>;

          public apiFactory(): com.snapchat.kit.sdk.core.networking.ClientFactory;

          public kitEventBaseFactory(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;

          public operationalMetricsQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;

          public inject(param0: com.snapchat.kit.sdk.SnapKitActivity): void;

          public sharedPreferences(): globalAndroid.content.SharedPreferences;

          public redirectUrl(): string;

          public gson(): com.google.gson.Gson;

          public context(): globalAndroid.content.Context;

          public static a(): com.snapchat.kit.sdk.b.a;

          public analyticsEventQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;

          public logoutController(): com.snapchat.kit.sdk.core.controller.LoginStateController;

          public clientId(): string;

          public authTokenManager(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
        }

        export module b {
          export class a {
            public static class: java.lang.Class<com.snapchat.kit.sdk.b.a>;

            public a(param0: com.snapchat.kit.sdk.d): com.snapchat.kit.sdk.b.a;
            public a(): com.snapchat.kit.sdk.SnapKitComponent;
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class c extends dagger.MembersInjector<com.snapchat.kit.sdk.SnapKitActivity> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.c>;

          public a(param0: com.snapchat.kit.sdk.SnapKitActivity): void;
          public static a(param0: com.snapchat.kit.sdk.SnapKitActivity, param1: com.snapchat.kit.sdk.OAuth2Manager): void;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module controller {
            export class LoginStateController {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.controller.LoginStateController>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.controller.LoginStateController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                addOnLoginStateChangedListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener): void;
                removeOnLoginStateChangedListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener): void;
                addOnLoginStartListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener): void;
                removeOnLoginStartListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener): void;
              });
              public constructor();

              public addOnLoginStateChangedListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener): void;

              public removeOnLoginStartListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener): void;

              public addOnLoginStartListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener): void;

              public removeOnLoginStateChangedListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener): void;
            }

            export module LoginStateController {
              export class OnLoginStartListener {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener>;

                /**
                 * Constructs a new instance of the com.snapchat.kit.sdk.core.controller.LoginStateController$OnLoginStartListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onLoginStart(): void;
                });
                public constructor();

                public onLoginStart(): void;
              }

              export class OnLoginStateChangedListener {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener>;

                /**
                 * Constructs a new instance of the com.snapchat.kit.sdk.core.controller.LoginStateController$OnLoginStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onLoginSucceeded(): void;
                  onLoginFailed(): void;
                  onLogout(): void;
                });
                public constructor();

                public onLogout(): void;

                public onLoginSucceeded(): void;

                public onLoginFailed(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module controller {
            export class a extends com.snapchat.kit.sdk.core.controller.LoginStateController {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.controller.a>;

              public d(): void;

              public a(): void;

              public addOnLoginStateChangedListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener): void;

              public removeOnLoginStartListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener): void;

              public addOnLoginStartListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStartListener): void;

              public removeOnLoginStateChangedListener(param0: com.snapchat.kit.sdk.core.controller.LoginStateController.OnLoginStateChangedListener): void;

              public c(): void;

              public b(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module controller {
            export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.core.controller.a> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.controller.b>;

              public constructor(param0: javax.inject.Provider<globalAndroid.os.Handler>);

              public static a(param0: javax.inject.Provider<globalAndroid.os.Handler>): dagger.internal.Factory<com.snapchat.kit.sdk.core.controller.a>;
              public a(): com.snapchat.kit.sdk.core.controller.a;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module dagger {
            export module scope {
              export class SnapConnectScope {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.dagger.scope.SnapConnectScope>;

                /**
                 * Constructs a new instance of the com.snapchat.kit.sdk.core.dagger.scope.SnapConnectScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class MetricPublisher<T> extends java.lang.Object {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.MetricPublisher<any>>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.metrics.MetricPublisher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                publishMetrics(param0: java.util.List<T>, param1: com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback): void;
                persistMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.b<T>>): void;
                getPersistedEvents(): java.util.List<com.snapchat.kit.sdk.core.metrics.b<T>>;
              });
              public constructor();

              public publishMetrics(param0: java.util.List<T>, param1: com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback): void;

              public persistMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.b<T>>): void;

              public getPersistedEvents(): java.util.List<com.snapchat.kit.sdk.core.metrics.b<T>>;
            }

            export module MetricPublisher {
              export class PublishCallback {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback>;

                /**
                 * Constructs a new instance of the com.snapchat.kit.sdk.core.metrics.MetricPublisher$PublishCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onSuccess(): void;
                  onNetworkError(): void;
                  onServerError(param0: java.lang.Error): void;
                });
                public constructor();

                public onSuccess(): void;

                public onServerError(param0: java.lang.Error): void;

                public onNetworkError(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class MetricQueue<T> extends java.lang.Object {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.MetricQueue<any>>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.metrics.MetricQueue<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                push(param0: T): void;
              });
              public constructor();

              public push(param0: T): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class MetricsClient {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.MetricsClient>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.metrics.MetricsClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                postAnalytics(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch): retrofit2.Call<java.lang.Void>;
                postOperationalMetrics(param0: com.snapchat.kit.sdk.core.metrics.model.Metrics): retrofit2.Call<java.lang.Void>;
              });
              public constructor();

              public postAnalytics(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch): retrofit2.Call<java.lang.Void>;

              public postOperationalMetrics(param0: com.snapchat.kit.sdk.core.metrics.model.Metrics): retrofit2.Call<java.lang.Void>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class OpMetricFactory {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.OpMetricFactory>;

              public constructor();

              public static createCount(param0: string, param1: number): com.snapchat.kit.sdk.core.metrics.model.OpMetric;

              public static createTimer(param0: string, param1: number): com.snapchat.kit.sdk.core.metrics.model.OpMetric;

              public static createLevel(param0: string, param1: number): com.snapchat.kit.sdk.core.metrics.model.OpMetric;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class a<T> extends com.snapchat.kit.sdk.core.metrics.MetricQueue<any> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.a<any>>;

              public a(): void;

              public push(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module a {
              export class a extends com.snapchat.kit.sdk.core.metrics.MetricPublisher<com.snapchat.kit.sdk.core.metrics.model.OpMetric> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.a.a>;

                public getPersistedEvents(): java.util.List<com.snapchat.kit.sdk.core.metrics.b<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>;

                public publishMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.OpMetric>, param1: com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback): void;

                public getPersistedEvents(): java.util.List<com.snapchat.kit.sdk.core.metrics.b<any>>;

                public persistMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.b<any>>): void;
                public persistMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.b<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>): void;

                public publishMetrics(param0: java.util.List<any>, param1: com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module a {
              export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.a.a> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.a.b>;

                public static a(param0: javax.inject.Provider<globalAndroid.content.SharedPreferences>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricsClient>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.b.a>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.a.a>;

                public constructor(param0: javax.inject.Provider<globalAndroid.content.SharedPreferences>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricsClient>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.b.a>);

                public a(): com.snapchat.kit.sdk.core.metrics.a.a;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class b<T> extends java.lang.Object {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.b<any>>;

              public constructor(param0: T);
              public constructor(param0: T, param1: number);

              public c(): T;

              public b(): number;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module b {
              export class a {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.b.a>;

                public a(param0: java.util.List): string;
                public a(param0: com.squareup.wire.ProtoAdapter, param1: string): java.util.List;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module b {
              export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.b.a> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.b.b>;

                public a(): com.snapchat.kit.sdk.core.metrics.b.a;

                public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);

                public static a(param0: javax.inject.Provider<com.google.gson.Gson>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.b.a>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class KitEventBaseFactory {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory>;

                public createKitEventBase(param0: com.snapchat.kit.sdk.core.metrics.model.KitType, param1: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class a extends com.snapchat.kit.sdk.core.metrics.MetricPublisher<com.snapchat.kit.sdk.core.metrics.model.ServerEvent> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.a>;

                public persistMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.b<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>): void;

                public publishMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>, param1: com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback): void;

                public getPersistedEvents(): java.util.List<com.snapchat.kit.sdk.core.metrics.b<any>>;

                public persistMetrics(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.b<any>>): void;

                public getPersistedEvents(): java.util.List<com.snapchat.kit.sdk.core.metrics.b<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>;

                public publishMetrics(param0: java.util.List<any>, param1: com.snapchat.kit.sdk.core.metrics.MetricPublisher.PublishCallback): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.a> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.b>;

                public a(): com.snapchat.kit.sdk.core.metrics.business.a;
                public static a(param0: javax.inject.Provider<globalAndroid.content.SharedPreferences>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.h>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricsClient>, param3: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.b.a>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.a>;

                public constructor(param0: javax.inject.Provider<globalAndroid.content.SharedPreferences>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.h>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricsClient>, param3: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.b.a>);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class c extends com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.c>;

                public push(param0: any): void;

                public a(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEvent): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class d extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.c> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.d>;

                public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.h>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.a<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.c>;
                public a(): com.snapchat.kit.sdk.core.metrics.business.c;

                public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.h>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.a<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class e {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.e>;

                public a(param0: boolean): com.snapchat.kit.sdk.core.metrics.model.ServerEvent;
                public a(): com.snapchat.kit.sdk.core.metrics.model.ServerEvent;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class f extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.e> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.f>;

                public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.e>;

                public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory>);

                public a(): com.snapchat.kit.sdk.core.metrics.business.e;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class g extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.g>;

                public a(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;

                public constructor(param0: javax.inject.Provider<string>);

                public static a(param0: javax.inject.Provider<string>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory>;
                public static a(param0: string): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module business {
              export class h {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.business.h>;

                public a(): void;

                public b(): number;

                public c(): number;

                public constructor(param0: globalAndroid.content.SharedPreferences);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export abstract class c {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.c>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class d extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.a<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.d>;

              public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.a>, param1: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>);

              public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.a>, param1: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.a<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>;
              public a(): com.snapchat.kit.sdk.core.metrics.a<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class e extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.MetricsClient> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.e>;

              public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.ClientFactory>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.MetricsClient>;

              public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.ClientFactory>);

              public a(): com.snapchat.kit.sdk.core.metrics.MetricsClient;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class f extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.f>;

              public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.a.a>, param1: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>;

              public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.a.a>, param1: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>);

              public a(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class g extends dagger.internal.Factory<java.util.concurrent.ScheduledExecutorService> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.g>;

              public constructor();

              public static b(): dagger.internal.Factory<java.util.concurrent.ScheduledExecutorService>;

              public a(): java.util.concurrent.ScheduledExecutorService;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export class h extends dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.h> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.h>;

              public a(): com.snapchat.kit.sdk.core.metrics.business.h;
              public static a(param0: javax.inject.Provider<globalAndroid.content.SharedPreferences>): dagger.internal.Factory<com.snapchat.kit.sdk.core.metrics.business.h>;

              public constructor(param0: javax.inject.Provider<globalAndroid.content.SharedPreferences>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitCreateAvatarTap extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap>;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase);

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: okio.ByteString);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap.Builder;
              }

              export module BitmojiKitCreateAvatarTap {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap.Builder>;

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap.Builder;

                  public constructor();

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap;
                }

                export class ProtoAdapter_BitmojiKitCreateAvatarTap extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap.ProtoAdapter_BitmojiKitCreateAvatarTap>;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap): number;

                  public constructor();

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitEventBase extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase>;
                public static DEFAULT_STICKER_PICKER_SESSION_ID: string;
                public kit_event_base: com.snapchat.kit.sdk.core.metrics.model.KitEventBase;
                public sticker_picker_session_id: string;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase, param1: string);

                public equals(param0: any): boolean;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.Builder;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase, param1: string, param2: okio.ByteString);
              }

              export module BitmojiKitEventBase {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.Builder>;

                  public constructor();

                  public sticker_picker_session_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.Builder;

                  public kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;
                }

                export class ProtoAdapter_BitmojiKitEventBase extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase.ProtoAdapter_BitmojiKitEventBase>;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;

                  public constructor();

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitPermissionUpdate extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate>;
                public static DEFAULT_STATUS: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;
                public status: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;

                public toString(): string;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.Builder;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus, param2: okio.ByteString);

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus);

                public hashCode(): number;
              }

              export module BitmojiKitPermissionUpdate {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.Builder>;

                  public constructor();

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate;

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.Builder;

                  public status(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.Builder;
                }

                export class ProtoAdapter_BitmojiKitPermissionUpdate extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate.ProtoAdapter_BitmojiKitPermissionUpdate>;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate;

                  public constructor();

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitPermissionUpdateStatus extends com.squareup.wire.WireEnum {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus>;
                public static UNKNOWN_BITMOJI_KIT_PERMISSION_UPDATE_STATUS: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;
                public static BITMOJI_PERMISSION_ON: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;
                public static BITMOJI_PERMISSION_OFF: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;
                public static BITMOJI_REAUTH_ERROR: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus>;

                public static valueOf(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;

                public static fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;

                public getValue(): number;

                public static values(): native.Array<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus>;
              }

              export module BitmojiKitPermissionUpdateStatus {
                export class ProtoAdapter_BitmojiKitPermissionUpdateStatus extends com.squareup.wire.EnumAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus.ProtoAdapter_BitmojiKitPermissionUpdateStatus>;

                  public fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdateStatus;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitSearch extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch>;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;
                public search_terms: java.util.List<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm>;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: java.util.List<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm>);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.Builder;

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: java.util.List<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm>, param2: okio.ByteString);

                public hashCode(): number;
              }

              export module BitmojiKitSearch {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.Builder>;

                  public constructor();

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch;

                  public search_terms(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm>): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.Builder;

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.Builder;
                }

                export class ProtoAdapter_BitmojiKitSearch extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch.ProtoAdapter_BitmojiKitSearch>;

                  public constructor();

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch): number;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitSearchCategory extends com.squareup.wire.WireEnum {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory>;
                public static UNKNOWN_BITMOJI_KIT_SEARCH_CATEGORY: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public static TEXT: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public static AUTOCOMPLETE: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public static PROGRAMMED_PILLS: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory>;

                public getValue(): number;

                public static valueOf(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;

                public static values(): native.Array<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory>;

                public static fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
              }

              export module BitmojiKitSearchCategory {
                export class ProtoAdapter_BitmojiKitSearchCategory extends com.squareup.wire.EnumAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory.ProtoAdapter_BitmojiKitSearchCategory>;

                  public fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitSearchTerm extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm>;
                public static DEFAULT_CATEGORY: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public static DEFAULT_VALUE: string;
                public category: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public value: string;

                public toString(): string;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.Builder;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory, param1: string, param2: okio.ByteString);

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory, param1: string);

                public hashCode(): number;
              }

              export module BitmojiKitSearchTerm {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.Builder>;

                  public constructor();

                  public category(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.Builder;

                  public value(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm;
                }

                export class ProtoAdapter_BitmojiKitSearchTerm extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm.ProtoAdapter_BitmojiKitSearchTerm>;

                  public constructor();

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchTerm;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitShare extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare>;
                public static DEFAULT_STICKER_ID: string;
                public static DEFAULT_SHARE_CATEGORY: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
                public static DEFAULT_SEARCH_CATEGORY: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;
                public subject_user_ids: java.util.List<string>;
                public sticker_id: string;
                public share_category: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
                public search_category: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: java.util.List<string>, param2: string, param3: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory, param4: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory);

                public equals(param0: any): boolean;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: java.util.List<string>, param2: string, param3: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory, param4: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory, param5: okio.ByteString);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder;
              }

              export module BitmojiKitShare {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder>;

                  public sticker_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder;

                  public constructor();

                  public subject_user_ids(param0: java.util.List<string>): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare;

                  public search_category(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearchCategory): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder;

                  public share_category(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder;

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.Builder;
                }

                export class ProtoAdapter_BitmojiKitShare extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare.ProtoAdapter_BitmojiKitShare>;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare;

                  public constructor();

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitShareCategory extends com.squareup.wire.WireEnum {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory>;
                public static UNKNOWN_BITMOJI_KIT_SHARE_CATEGORY: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
                public static POPULAR: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
                public static SEARCH: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory>;

                public getValue(): number;

                public static fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;

                public static values(): native.Array<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory>;

                public static valueOf(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
              }

              export module BitmojiKitShareCategory {
                export class ProtoAdapter_BitmojiKitShareCategory extends com.squareup.wire.EnumAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory.ProtoAdapter_BitmojiKitShareCategory>;

                  public fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShareCategory;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitSnapchatLinkSuccess extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess>;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;

                public toString(): string;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess.Builder;

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase);

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: okio.ByteString);
              }

              export module BitmojiKitSnapchatLinkSuccess {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess.Builder>;

                  public constructor();

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess;
                }

                export class ProtoAdapter_BitmojiKitSnapchatLinkSuccess extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess.ProtoAdapter_BitmojiKitSnapchatLinkSuccess>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitSnapchatLinkTap extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap>;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap.Builder;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase);

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: okio.ByteString);
              }

              export module BitmojiKitSnapchatLinkTap {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap.Builder>;

                  public constructor();

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap;
                }

                export class ProtoAdapter_BitmojiKitSnapchatLinkTap extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap.ProtoAdapter_BitmojiKitSnapchatLinkTap>;

                  public constructor();

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap): void;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap): number;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitStickerPickerClose extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose>;
                public static DEFAULT_STICKER_PICKER_SESSION_DURATION_MILLIS: java.lang.Long;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;
                public sticker_picker_session_duration_millis: java.lang.Long;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: java.lang.Long, param2: okio.ByteString);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.Builder;

                public equals(param0: any): boolean;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: java.lang.Long);
              }

              export module BitmojiKitStickerPickerClose {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.Builder>;

                  public constructor();

                  public sticker_picker_session_duration_millis(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.Builder;

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose;
                }

                export class ProtoAdapter_BitmojiKitStickerPickerClose extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose.ProtoAdapter_BitmojiKitStickerPickerClose>;

                  public constructor();

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitStickerPickerOpen extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen>;
                public static DEFAULT_STICKER_PICKER_VIEW: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public bitmoji_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase;
                public sticker_picker_view: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;

                public toString(): string;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.Builder;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView);
                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView, param2: okio.ByteString);

                public equals(param0: any): boolean;

                public hashCode(): number;
              }

              export module BitmojiKitStickerPickerOpen {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen, com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.Builder>;

                  public constructor();

                  public bitmoji_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitEventBase): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.Builder;

                  public sticker_picker_view(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen;
                }

                export class ProtoAdapter_BitmojiKitStickerPickerOpen extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen.ProtoAdapter_BitmojiKitStickerPickerOpen>;

                  public constructor();

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen): void;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class BitmojiKitStickerPickerView extends com.squareup.wire.WireEnum {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView>;
                public static UNKNOWN_BITMOJI_KIT_PICKER_VIEW: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public static STICKER_PICKER: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public static CREATE_AVATAR: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public static LINK_ACCOUNT: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public static NOT_AUTHORIZED: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public static ERROR_VIEW: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView>;

                public static valueOf(param0: string): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;

                public getValue(): number;

                public static values(): native.Array<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView>;

                public static fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
              }

              export module BitmojiKitStickerPickerView {
                export class ProtoAdapter_BitmojiKitStickerPickerView extends com.squareup.wire.EnumAdapter<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView.ProtoAdapter_BitmojiKitStickerPickerView>;

                  public fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerView;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class CounterMetric extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.CounterMetric, com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CounterMetric>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CounterMetric>;
                public static DEFAULT_NAME: string;
                public static DEFAULT_COUNT: java.lang.Long;
                public name: string;
                public timestamp: com.snapchat.kit.sdk.core.metrics.model.Timestamp;
                public count: java.lang.Long;

                public toString(): string;

                public constructor(param0: string, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp, param2: java.lang.Long);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder;

                public equals(param0: any): boolean;

                public constructor(param0: string, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp, param2: java.lang.Long, param3: okio.ByteString);

                public hashCode(): number;
              }

              export module CounterMetric {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.CounterMetric, com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder>;

                  public constructor();

                  public timestamp(param0: com.snapchat.kit.sdk.core.metrics.model.Timestamp): com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.CounterMetric;

                  public name(param0: string): com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder;

                  public count(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.CounterMetric.Builder;
                }

                export class ProtoAdapter_CounterMetric extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CounterMetric> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CounterMetric.ProtoAdapter_CounterMetric>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.CounterMetric): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.CounterMetric): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.CounterMetric;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.CounterMetric): com.snapchat.kit.sdk.core.metrics.model.CounterMetric;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class CreativeKitEventBase extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase, com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase>;
                public kit_event_base: com.snapchat.kit.sdk.core.metrics.model.KitEventBase;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase);

                public toString(): string;

                public equals(param0: any): boolean;

                public hashCode(): number;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase.Builder;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase, param1: okio.ByteString);
              }

              export module CreativeKitEventBase {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase, com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase.Builder>;

                  public constructor();

                  public kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase): com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase;
                }

                export class ProtoAdapter_CreativeKitEventBase extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase.ProtoAdapter_CreativeKitEventBase>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase): number;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase): void;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase): com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class CreativeKitShareComplete extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete, com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete>;
                public static DEFAULT_IS_SUCCESS: java.lang.Boolean;
                public creative_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase;
                public is_success: java.lang.Boolean;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase, param1: java.lang.Boolean, param2: okio.ByteString);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.Builder;

                public equals(param0: any): boolean;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase, param1: java.lang.Boolean);
              }

              export module CreativeKitShareComplete {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete, com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.Builder>;

                  public constructor();

                  public is_success(param0: java.lang.Boolean): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete;

                  public creative_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.Builder;
                }

                export class ProtoAdapter_CreativeKitShareComplete extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete.ProtoAdapter_CreativeKitShareComplete>;

                  public constructor();

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete): void;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class CreativeKitShareStart extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart, com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart>;
                public creative_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase;

                public toString(): string;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart.Builder;

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase);
                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase, param1: okio.ByteString);

                public hashCode(): number;
              }

              export module CreativeKitShareStart {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart, com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart.Builder>;

                  public creative_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitEventBase): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart.Builder;

                  public constructor();

                  public build(): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart;
                }

                export class ProtoAdapter_CreativeKitShareStart extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart.ProtoAdapter_CreativeKitShareStart>;

                  public constructor();

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart): number;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class KitEventBase extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.KitEventBase, com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.KitEventBase>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.KitEventBase>;
                public static DEFAULT_OAUTH_CLIENT_ID: string;
                public static DEFAULT_LOCALE: string;
                public static DEFAULT_KIT_USER_AGENT: string;
                public static DEFAULT_IP_ADDRESS: string;
                public static DEFAULT_OS_MINOR_VERSION: string;
                public static DEFAULT_KIT_VARIANT: com.snapchat.kit.sdk.core.metrics.model.KitType;
                public static DEFAULT_KIT_VARIANT_VERSION: string;
                public static DEFAULT_KIT_CLIENT_TIMESTAMP_MILLIS: java.lang.Long;
                public static DEFAULT_CLIENT_SEQUENCE_ID: java.lang.Long;
                public static DEFAULT_MAX_CLIENT_SEQUENCE_ID_ON_INSTANCE: java.lang.Long;
                public oauth_client_id: string;
                public locale: string;
                public kit_user_agent: string;
                public ip_address: string;
                public os_minor_version: string;
                public kit_variant: com.snapchat.kit.sdk.core.metrics.model.KitType;
                public kit_variant_version: string;
                public kit_client_timestamp_millis: java.lang.Long;
                public client_sequence_id: java.lang.Long;
                public max_client_sequence_id_on_instance: java.lang.Long;

                public toString(): string;

                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.snapchat.kit.sdk.core.metrics.model.KitType, param6: string, param7: java.lang.Long, param8: java.lang.Long, param9: java.lang.Long);
                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.snapchat.kit.sdk.core.metrics.model.KitType, param6: string, param7: java.lang.Long, param8: java.lang.Long, param9: java.lang.Long, param10: okio.ByteString);

                public equals(param0: any): boolean;

                public hashCode(): number;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;
              }

              export module KitEventBase {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.KitEventBase, com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder>;

                  public max_client_sequence_id_on_instance(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public constructor();

                  public kit_variant_version(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public client_sequence_id(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public oauth_client_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public kit_user_agent(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public os_minor_version(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public kit_variant(param0: com.snapchat.kit.sdk.core.metrics.model.KitType): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public locale(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.KitEventBase;

                  public kit_client_timestamp_millis(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;

                  public ip_address(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitEventBase.Builder;
                }

                export class ProtoAdapter_KitEventBase extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.KitEventBase> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.KitEventBase.ProtoAdapter_KitEventBase>;

                  public constructor();

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.KitEventBase;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.KitEventBase): void;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase): com.snapchat.kit.sdk.core.metrics.model.KitEventBase;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class KitType extends com.squareup.wire.WireEnum {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.KitType>;
                public static UNKNOWN_KIT_TYPE: com.snapchat.kit.sdk.core.metrics.model.KitType;
                public static BITMOJI_KIT: com.snapchat.kit.sdk.core.metrics.model.KitType;
                public static CREATIVE_KIT: com.snapchat.kit.sdk.core.metrics.model.KitType;
                public static LOGIN_KIT: com.snapchat.kit.sdk.core.metrics.model.KitType;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.KitType>;

                public static values(): native.Array<com.snapchat.kit.sdk.core.metrics.model.KitType>;

                public getValue(): number;

                public static fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.KitType;

                public static valueOf(param0: string): com.snapchat.kit.sdk.core.metrics.model.KitType;
              }

              export module KitType {
                export class ProtoAdapter_KitType extends com.squareup.wire.EnumAdapter<com.snapchat.kit.sdk.core.metrics.model.KitType> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.KitType.ProtoAdapter_KitType>;

                  public fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.KitType;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class LevelMetric extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.LevelMetric, com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LevelMetric>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LevelMetric>;
                public static DEFAULT_NAME: string;
                public static DEFAULT_LEVEL: java.lang.Long;
                public name: string;
                public timestamp: com.snapchat.kit.sdk.core.metrics.model.Timestamp;
                public level: java.lang.Long;

                public toString(): string;

                public constructor(param0: string, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp, param2: java.lang.Long);

                public equals(param0: any): boolean;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder;

                public constructor(param0: string, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp, param2: java.lang.Long, param3: okio.ByteString);

                public hashCode(): number;
              }

              export module LevelMetric {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.LevelMetric, com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder>;

                  public constructor();

                  public name(param0: string): com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder;

                  public level(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder;

                  public timestamp(param0: com.snapchat.kit.sdk.core.metrics.model.Timestamp): com.snapchat.kit.sdk.core.metrics.model.LevelMetric.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.LevelMetric;
                }

                export class ProtoAdapter_LevelMetric extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LevelMetric> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LevelMetric.ProtoAdapter_LevelMetric>;

                  public constructor();

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.LevelMetric): com.snapchat.kit.sdk.core.metrics.model.LevelMetric;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.LevelMetric): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.LevelMetric;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.LevelMetric): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class LoginKitAuthComplete extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete, com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete>;
                public static DEFAULT_IS_SUCCESS: java.lang.Boolean;
                public log_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase;
                public is_success: java.lang.Boolean;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase, param1: java.lang.Boolean, param2: okio.ByteString);

                public equals(param0: any): boolean;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.Builder;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase, param1: java.lang.Boolean);
              }

              export module LoginKitAuthComplete {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete, com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.Builder>;

                  public log_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete;

                  public constructor();

                  public is_success(param0: java.lang.Boolean): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.Builder;
                }

                export class ProtoAdapter_LoginKitAuthComplete extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete.ProtoAdapter_LoginKitAuthComplete>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class LoginKitAuthStart extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart, com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart>;
                public log_kit_event_base: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase);
                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase, param1: okio.ByteString);

                public equals(param0: any): boolean;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart.Builder;

                public hashCode(): number;
              }

              export module LoginKitAuthStart {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart, com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart.Builder>;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart;

                  public constructor();

                  public log_kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart.Builder;
                }

                export class ProtoAdapter_LoginKitAuthStart extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart.ProtoAdapter_LoginKitAuthStart>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart): com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class LoginKitEventBase extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase, com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase>;
                public kit_event_base: com.snapchat.kit.sdk.core.metrics.model.KitEventBase;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase);

                public toString(): string;

                public equals(param0: any): boolean;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase.Builder;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase, param1: okio.ByteString);
              }

              export module LoginKitEventBase {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase, com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase.Builder>;

                  public constructor();

                  public kit_event_base(param0: com.snapchat.kit.sdk.core.metrics.model.KitEventBase): com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase;
                }

                export class ProtoAdapter_LoginKitEventBase extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase.ProtoAdapter_LoginKitEventBase>;

                  public constructor();

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase): number;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase): com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.LoginKitEventBase): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class Metrics extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.Metrics, com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.Metrics>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.Metrics>;
                public counters: java.util.List<com.snapchat.kit.sdk.core.metrics.model.CounterMetric>;
                public timers: java.util.List<com.snapchat.kit.sdk.core.metrics.model.TimerMetric>;
                public levels: java.util.List<com.snapchat.kit.sdk.core.metrics.model.LevelMetric>;

                public constructor(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.CounterMetric>, param1: java.util.List<com.snapchat.kit.sdk.core.metrics.model.TimerMetric>, param2: java.util.List<com.snapchat.kit.sdk.core.metrics.model.LevelMetric>);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.CounterMetric>, param1: java.util.List<com.snapchat.kit.sdk.core.metrics.model.TimerMetric>, param2: java.util.List<com.snapchat.kit.sdk.core.metrics.model.LevelMetric>, param3: okio.ByteString);

                public hashCode(): number;
              }

              export module Metrics {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.Metrics, com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder>;

                  public counters(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.CounterMetric>): com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder;

                  public constructor();

                  public timers(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.TimerMetric>): com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.Metrics;

                  public levels(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.LevelMetric>): com.snapchat.kit.sdk.core.metrics.model.Metrics.Builder;
                }

                export class ProtoAdapter_Metrics extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.Metrics> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.Metrics.ProtoAdapter_Metrics>;

                  public constructor();

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.Metrics): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.Metrics;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.Metrics): number;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.Metrics): com.snapchat.kit.sdk.core.metrics.model.Metrics;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class OpMetric extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.OpMetric, com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;
                public counter_metric: com.snapchat.kit.sdk.core.metrics.model.CounterMetric;
                public timer_metric: com.snapchat.kit.sdk.core.metrics.model.TimerMetric;
                public level_metric: com.snapchat.kit.sdk.core.metrics.model.LevelMetric;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CounterMetric, param1: com.snapchat.kit.sdk.core.metrics.model.TimerMetric, param2: com.snapchat.kit.sdk.core.metrics.model.LevelMetric, param3: okio.ByteString);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder;

                public hashCode(): number;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CounterMetric, param1: com.snapchat.kit.sdk.core.metrics.model.TimerMetric, param2: com.snapchat.kit.sdk.core.metrics.model.LevelMetric);
              }

              export module OpMetric {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.OpMetric, com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder>;

                  public constructor();

                  public counter_metric(param0: com.snapchat.kit.sdk.core.metrics.model.CounterMetric): com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder;

                  public timer_metric(param0: com.snapchat.kit.sdk.core.metrics.model.TimerMetric): com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.OpMetric;

                  public level_metric(param0: com.snapchat.kit.sdk.core.metrics.model.LevelMetric): com.snapchat.kit.sdk.core.metrics.model.OpMetric.Builder;
                }

                export class ProtoAdapter_OpMetric extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.OpMetric> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.OpMetric.ProtoAdapter_OpMetric>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.OpMetric): number;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.OpMetric;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.OpMetric): com.snapchat.kit.sdk.core.metrics.model.OpMetric;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.OpMetric): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class ServerEvent extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.ServerEvent, com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;
                public static DEFAULT_EVENT_NAME: string;
                public static DEFAULT_REQUEST_ID: string;
                public static DEFAULT_SERVER_TS: java.lang.Double;
                public static DEFAULT_USER_ID: string;
                public static DEFAULT_USER_AGENT: string;
                public static DEFAULT_COUNTRY: string;
                public static DEFAULT_CITY: string;
                public static DEFAULT_REGION: string;
                public static DEFAULT_EVENT_ID: string;
                public static DEFAULT_INSTANCE_ID: string;
                public static DEFAULT_SEQUENCE_ID: java.lang.Long;
                public static DEFAULT_OS_TYPE: string;
                public static DEFAULT_OS_VERSION: string;
                public static DEFAULT_APP_VERSION: string;
                public static DEFAULT_APP_BUILD: string;
                public event_name: string;
                public request_id: string;
                public server_ts: java.lang.Double;
                public user_id: string;
                public user_agent: string;
                public country: string;
                public city: string;
                public region: string;
                public event_id: string;
                public instance_id: string;
                public sequence_id: java.lang.Long;
                public os_type: string;
                public os_version: string;
                public app_version: string;
                public app_build: string;
                public event_data: com.snapchat.kit.sdk.core.metrics.model.ServerEventData;

                public constructor(param0: string, param1: string, param2: java.lang.Double, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.lang.Long, param11: string, param12: string, param13: string, param14: string, param15: com.snapchat.kit.sdk.core.metrics.model.ServerEventData);

                public toString(): string;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                public equals(param0: any): boolean;

                public hashCode(): number;

                public constructor(param0: string, param1: string, param2: java.lang.Double, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.lang.Long, param11: string, param12: string, param13: string, param14: string, param15: com.snapchat.kit.sdk.core.metrics.model.ServerEventData, param16: okio.ByteString);
              }

              export module ServerEvent {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.ServerEvent, com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder>;

                  public event_name(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public constructor();

                  public user_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public app_build(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public server_ts(param0: java.lang.Double): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public request_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public sequence_id(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public os_type(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public city(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public app_version(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public event_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public event_data(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventData): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public country(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public region(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public instance_id(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.ServerEvent;

                  public user_agent(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;

                  public os_version(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerEvent.Builder;
                }

                export class ProtoAdapter_ServerEvent extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerEvent> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEvent.ProtoAdapter_ServerEvent>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEvent): number;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.ServerEvent;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.ServerEvent): void;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEvent): com.snapchat.kit.sdk.core.metrics.model.ServerEvent;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class ServerEventBatch extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch, com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch>;
                public static DEFAULT_SERVER_UPLOAD_TS: java.lang.Double;
                public static DEFAULT_MAX_SEQUENCE_ID_ON_INSTANCE: java.lang.Long;
                public server_upload_ts: java.lang.Double;
                public max_sequence_id_on_instance: java.lang.Long;
                public server_events: java.util.List<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;

                public toString(): string;

                public constructor(param0: java.lang.Double, param1: java.lang.Long, param2: java.util.List<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder;

                public equals(param0: any): boolean;

                public constructor(param0: java.lang.Double, param1: java.lang.Long, param2: java.util.List<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>, param3: okio.ByteString);

                public hashCode(): number;
              }

              export module ServerEventBatch {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch, com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder>;

                  public constructor();

                  public build(): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch;

                  public max_sequence_id_on_instance(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder;

                  public server_upload_ts(param0: java.lang.Double): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder;

                  public server_events(param0: java.util.List<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.Builder;
                }

                export class ProtoAdapter_ServerEventBatch extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch.ProtoAdapter_ServerEventBatch>;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch;

                  public constructor();

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.ServerEventBatch): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class ServerEventData extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.ServerEventData, com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEventData>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerEventData>;
                public creative_kit_share_start: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart;
                public creative_kit_share_complete: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete;
                public bitmoji_kit_sticker_picker_open: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen;
                public bitmoji_kit_sticker_picker_close: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose;
                public bitmoji_kit_share: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare;
                public bitmoji_kit_search: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch;
                public bitmoji_kit_snapchat_link_tap: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap;
                public bitmoji_kit_snapchat_link_success: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess;
                public bitmoji_kit_create_avatar_tap: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap;
                public login_kit_auth_start: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart;
                public login_kit_auth_complete: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete;
                public bitmoji_kit_permission_update: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart, param1: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete, param2: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen, param3: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose, param4: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare, param5: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch, param6: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap, param7: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess, param8: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap, param9: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart, param10: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete, param11: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate, param12: okio.ByteString);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                public toString(): string;

                public constructor(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart, param1: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete, param2: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen, param3: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose, param4: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare, param5: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch, param6: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap, param7: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess, param8: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap, param9: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart, param10: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete, param11: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate);

                public equals(param0: any): boolean;

                public hashCode(): number;
              }

              export module ServerEventData {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.ServerEventData, com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder>;

                  public constructor();

                  public creative_kit_share_complete(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareComplete): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public login_kit_auth_start(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthStart): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_snapchat_link_success(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkSuccess): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_permission_update(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitPermissionUpdate): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_create_avatar_tap(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitCreateAvatarTap): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.ServerEventData;

                  public bitmoji_kit_search(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSearch): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_sticker_picker_open(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerOpen): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_sticker_picker_close(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitStickerPickerClose): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public login_kit_auth_complete(param0: com.snapchat.kit.sdk.core.metrics.model.LoginKitAuthComplete): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_share(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitShare): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public bitmoji_kit_snapchat_link_tap(param0: com.snapchat.kit.sdk.core.metrics.model.BitmojiKitSnapchatLinkTap): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;

                  public creative_kit_share_start(param0: com.snapchat.kit.sdk.core.metrics.model.CreativeKitShareStart): com.snapchat.kit.sdk.core.metrics.model.ServerEventData.Builder;
                }

                export class ProtoAdapter_ServerEventData extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerEventData> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerEventData.ProtoAdapter_ServerEventData>;

                  public constructor();

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.ServerEventData): void;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.ServerEventData;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventData): number;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.ServerEventData): com.snapchat.kit.sdk.core.metrics.model.ServerEventData;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class ServerTier extends com.squareup.wire.WireEnum {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerTier>;
                public static OPS_TIER: com.snapchat.kit.sdk.core.metrics.model.ServerTier;
                public static CRITICAL_TIER: com.snapchat.kit.sdk.core.metrics.model.ServerTier;
                public static BUSINESS_TIER: com.snapchat.kit.sdk.core.metrics.model.ServerTier;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerTier>;

                public static fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.ServerTier;

                public getValue(): number;

                public static values(): native.Array<com.snapchat.kit.sdk.core.metrics.model.ServerTier>;

                public static valueOf(param0: string): com.snapchat.kit.sdk.core.metrics.model.ServerTier;
              }

              export module ServerTier {
                export class ProtoAdapter_ServerTier extends com.squareup.wire.EnumAdapter<com.snapchat.kit.sdk.core.metrics.model.ServerTier> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.ServerTier.ProtoAdapter_ServerTier>;

                  public fromValue(param0: number): com.snapchat.kit.sdk.core.metrics.model.ServerTier;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class TimerMetric extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.TimerMetric, com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.TimerMetric>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.TimerMetric>;
                public static DEFAULT_NAME: string;
                public static DEFAULT_LATENCY_MILLIS: java.lang.Long;
                public name: string;
                public timestamp: com.snapchat.kit.sdk.core.metrics.model.Timestamp;
                public latency_millis: java.lang.Long;

                public toString(): string;

                public constructor(param0: string, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp, param2: java.lang.Long);

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder;

                public equals(param0: any): boolean;

                public constructor(param0: string, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp, param2: java.lang.Long, param3: okio.ByteString);

                public hashCode(): number;
              }

              export module TimerMetric {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.TimerMetric, com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder>;

                  public constructor();

                  public name(param0: string): com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder;

                  public timestamp(param0: com.snapchat.kit.sdk.core.metrics.model.Timestamp): com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder;

                  public latency_millis(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.TimerMetric.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.TimerMetric;
                }

                export class ProtoAdapter_TimerMetric extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.TimerMetric> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.TimerMetric.ProtoAdapter_TimerMetric>;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.TimerMetric): void;

                  public constructor();

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.TimerMetric;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.TimerMetric): com.snapchat.kit.sdk.core.metrics.model.TimerMetric;

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.TimerMetric): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module metrics {
            export module model {
              export class Timestamp extends com.squareup.wire.Message<com.snapchat.kit.sdk.core.metrics.model.Timestamp, com.snapchat.kit.sdk.core.metrics.model.Timestamp.Builder> {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.Timestamp>;
                public static ADAPTER: com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.Timestamp>;
                public static DEFAULT_SECONDS: java.lang.Long;
                public static DEFAULT_NANOS: java.lang.Integer;
                public seconds: java.lang.Long;
                public nanos: java.lang.Integer;

                public toString(): string;

                public equals(param0: any): boolean;

                public newBuilder(): com.snapchat.kit.sdk.core.metrics.model.Timestamp.Builder;

                public constructor(param0: java.lang.Long, param1: java.lang.Integer, param2: okio.ByteString);

                public hashCode(): number;

                public constructor(param0: java.lang.Long, param1: java.lang.Integer);
              }

              export module Timestamp {
                export class Builder extends com.squareup.wire.Message.Builder<com.snapchat.kit.sdk.core.metrics.model.Timestamp, com.snapchat.kit.sdk.core.metrics.model.Timestamp.Builder> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.Timestamp.Builder>;

                  public constructor();

                  public nanos(param0: java.lang.Integer): com.snapchat.kit.sdk.core.metrics.model.Timestamp.Builder;

                  public seconds(param0: java.lang.Long): com.snapchat.kit.sdk.core.metrics.model.Timestamp.Builder;

                  public build(): com.snapchat.kit.sdk.core.metrics.model.Timestamp;
                }

                export class ProtoAdapter_Timestamp extends com.squareup.wire.ProtoAdapter<com.snapchat.kit.sdk.core.metrics.model.Timestamp> {
                  public static class: java.lang.Class<com.snapchat.kit.sdk.core.metrics.model.Timestamp.ProtoAdapter_Timestamp>;

                  public constructor();

                  public encodedSize(param0: com.snapchat.kit.sdk.core.metrics.model.Timestamp): number;

                  public encode(param0: com.squareup.wire.ProtoWriter, param1: com.snapchat.kit.sdk.core.metrics.model.Timestamp): void;

                  public redact(param0: com.snapchat.kit.sdk.core.metrics.model.Timestamp): com.snapchat.kit.sdk.core.metrics.model.Timestamp;

                  public decode(param0: com.squareup.wire.ProtoReader): com.snapchat.kit.sdk.core.metrics.model.Timestamp;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module models {
            export class AnalyticsPayload {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.models.AnalyticsPayload>;

              public constructor(param0: java.util.List<java.util.Map<string, any>>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module models {
            export class AuthToken {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.models.AuthToken>;

              public setRefreshToken(param0: string): void;

              public hashCode(): number;

              public getExpiresIn(): number;

              public setLastUpdated(param0: number): void;

              public constructor(param0: string, param1: string);

              public toJson(): string;

              public toString(): string;

              public getScope(): string;

              public getLastUpdated(): number;

              public getRefreshToken(): string;

              public getExpiresInMillis(): number;

              public getTokenType(): string;

              public getAccessToken(): string;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module models {
            export class AuthorizationRequest {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.models.AuthorizationRequest>;

              public constructor();

              public withRedirectUri(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public getState(): string;

              public toUri(param0: string, param1: string, param2: string, param3: string): globalAndroid.net.Uri;

              public hashCode(): number;

              public withCodeChallengeMethod(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public withCodeChallenge(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public toJson(): string;

              public getCodeVerifier(): string;

              public withState(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public toString(): string;

              public withClientId(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public withScope(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public withCodeVerifier(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public withResponseType(param0: string): com.snapchat.kit.sdk.core.models.AuthorizationRequest;

              public getRedirectUri(): string;

              public getResponseType(): string;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module models {
            export class TokenErrorResponse {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.models.TokenErrorResponse>;
              public mError: string;
              public mErrorDescription: string;
              public mMessage: string;

              public getErrorDescription(): string;

              public hashCode(): number;

              public constructor(param0: string);

              public getError(): string;

              public equals(param0: any): boolean;

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class AuthTokenManager {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.AuthTokenManager>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.networking.AuthTokenManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                isUserLoggedIn(): boolean;
                revokeToken(): void;
                startTokenGrant(): void;
                hasAccessToScope(param0: string): boolean;
              });
              public constructor();

              public isUserLoggedIn(): boolean;

              public revokeToken(): void;

              public startTokenGrant(): void;

              public hasAccessToScope(param0: string): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class ClientFactory {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.ClientFactory>;

              public generateClient(param0: java.lang.Class): any;
              public generateClient(param0: string, param1: java.lang.Class): any;

              public generateFingerprintedClient(param0: string, param1: java.lang.Class): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class a extends dagger.internal.Factory<com.snapchat.kit.sdk.core.networking.ClientFactory> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.a>;

              public a(): com.snapchat.kit.sdk.core.networking.ClientFactory;

              public constructor(param0: javax.inject.Provider<okhttp3.Cache>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.e>, param3: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.c>);

              public static a(param0: javax.inject.Provider<okhttp3.Cache>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.e>, param3: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.c>): dagger.internal.Factory<com.snapchat.kit.sdk.core.networking.ClientFactory>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class b {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.b>;
              public static a: string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class c extends com.snapchat.kit.sdk.core.networking.e {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.c>;

              public a(param0: okhttp3.Interceptor.Chain): okhttp3.Request.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class d extends dagger.internal.Factory<com.snapchat.kit.sdk.core.networking.c> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.d>;

              public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.OAuth2Manager>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.a>, param2: javax.inject.Provider<string>, param3: javax.inject.Provider<com.snapchat.kit.sdk.core.security.Fingerprint>): dagger.internal.Factory<com.snapchat.kit.sdk.core.networking.c>;

              public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.OAuth2Manager>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.a>, param2: javax.inject.Provider<string>, param3: javax.inject.Provider<com.snapchat.kit.sdk.core.security.Fingerprint>);

              public a(): com.snapchat.kit.sdk.core.networking.c;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class e {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.e>;

              public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;

              public a(param0: okhttp3.Interceptor.Chain): okhttp3.Request.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module networking {
            export class f extends dagger.internal.Factory<com.snapchat.kit.sdk.core.networking.e> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.networking.f>;

              public a(): com.snapchat.kit.sdk.core.networking.e;

              public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.OAuth2Manager>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.a>, param2: javax.inject.Provider<string>);

              public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.OAuth2Manager>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.a>, param2: javax.inject.Provider<string>): dagger.internal.Factory<com.snapchat.kit.sdk.core.networking.e>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class EncryptDecryptAlgorithm {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                encrypt(param0: string): string;
                decrypt(param0: string): string;
              });
              public constructor();

              public encrypt(param0: string): string;

              public decrypt(param0: string): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class Fingerprint {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.Fingerprint>;

              public constructor(param0: globalAndroid.content.Context);

              public a(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class KeyValueStore {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.KeyValueStore>;

              /**
               * Constructs a new instance of the com.snapchat.kit.sdk.core.security.KeyValueStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getString(param0: string, param1: string): string;
                putString(param0: string, param1: string): void;
                get(param0: string, param1: java.lang.Class): any;
                put(param0: string, param1: any): void;
                clearEntry(param0: string): void;
              });
              public constructor();

              public getString(param0: string, param1: string): string;

              public get(param0: string, param1: java.lang.Class): any;

              public putString(param0: string, param1: string): void;

              public put(param0: string, param1: any): void;

              public clearEntry(param0: string): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class a extends com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.a>;

              public encrypt(param0: string): string;

              public constructor(param0: javax.crypto.SecretKey, param1: com.google.gson.Gson);

              public decrypt(param0: string): string;
            }

            export module a {
              export class a {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.a.a>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.core.security.Fingerprint> {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.b>;

              public static a(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<com.snapchat.kit.sdk.core.security.Fingerprint>;
              public a(): com.snapchat.kit.sdk.core.security.Fingerprint;

              public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class c extends com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.c>;

              public constructor();

              public encrypt(param0: string): string;

              public decrypt(param0: string): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class d extends com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.d>;

              public encrypt(param0: string): string;

              public a(): com.snapchat.kit.sdk.core.security.d.a;

              public decrypt(param0: string): string;

              public constructor(param0: java.security.KeyStore, param1: globalAndroid.content.Context, param2: com.snapchat.kit.sdk.core.security.d.a);
            }

            export module d {
              export class a {
                public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.d.a>;

                public equals(param0: any): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class e {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.e>;

              public b(): boolean;

              public a(): javax.crypto.SecretKey;

              public constructor(param0: javax.crypto.SecretKey, param1: boolean);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class f {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.f>;

              public static a(param0: java.security.KeyStore): com.snapchat.kit.sdk.core.security.e;
              public static a(param0: globalAndroid.content.SharedPreferences, param1: com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm, param2: boolean): com.snapchat.kit.sdk.core.security.e;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module core {
          export module security {
            export class g extends com.snapchat.kit.sdk.core.security.KeyValueStore {
              public static class: java.lang.Class<com.snapchat.kit.sdk.core.security.g>;

              public getString(param0: string, param1: string): string;

              public constructor(param0: globalAndroid.content.SharedPreferences, param1: com.snapchat.kit.sdk.core.security.EncryptDecryptAlgorithm, param2: com.google.gson.Gson);

              public get(param0: string, param1: java.lang.Class): any;

              public putString(param0: string, param1: string): void;

              public put(param0: string, param1: any): void;

              public clearEntry(param0: string): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class d {
          public static class: java.lang.Class<com.snapchat.kit.sdk.d>;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class e extends dagger.internal.Factory<okhttp3.Cache> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.e>;

          public constructor(param0: com.snapchat.kit.sdk.d);

          public a(): okhttp3.Cache;
          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<okhttp3.Cache>;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class f extends dagger.internal.Factory<string> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.f>;

          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<string>;

          public constructor(param0: com.snapchat.kit.sdk.d);

          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class g extends dagger.internal.Factory<globalAndroid.content.Context> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.g>;

          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<globalAndroid.content.Context>;
          public a(): globalAndroid.content.Context;

          public constructor(param0: com.snapchat.kit.sdk.d);
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class h extends dagger.internal.Factory<com.google.gson.Gson> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.h>;

          public constructor(param0: com.snapchat.kit.sdk.d);

          public a(): com.google.gson.Gson;
          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<com.google.gson.Gson>;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class i extends dagger.internal.Factory<com.snapchat.kit.sdk.OAuth2Manager> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.i>;

          public constructor(param0: com.snapchat.kit.sdk.d, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.security.g>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.a>, param3: javax.inject.Provider<okhttp3.OkHttpClient>, param4: javax.inject.Provider<com.google.gson.Gson>, param5: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>, param6: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.e>, param7: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>);

          public a(): com.snapchat.kit.sdk.OAuth2Manager;
          public static a(param0: com.snapchat.kit.sdk.d, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.security.g>, param2: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.a>, param3: javax.inject.Provider<okhttp3.OkHttpClient>, param4: javax.inject.Provider<com.google.gson.Gson>, param5: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>>, param6: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.business.e>, param7: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>): dagger.internal.Factory<com.snapchat.kit.sdk.OAuth2Manager>;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class j extends dagger.internal.Factory<okhttp3.OkHttpClient> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.j>;

          public a(): okhttp3.OkHttpClient;
          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<okhttp3.OkHttpClient>;

          public constructor(param0: com.snapchat.kit.sdk.d);
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class k extends dagger.internal.Factory<com.snapchat.kit.sdk.core.security.g> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.k>;

          public constructor(param0: com.snapchat.kit.sdk.d, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<globalAndroid.content.SharedPreferences>);

          public static a(param0: com.snapchat.kit.sdk.d, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<globalAndroid.content.SharedPreferences>): dagger.internal.Factory<com.snapchat.kit.sdk.core.security.g>;
          public a(): com.snapchat.kit.sdk.core.security.g;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class l extends dagger.internal.Factory<globalAndroid.content.SharedPreferences> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.l>;

          public constructor(param0: com.snapchat.kit.sdk.d);

          public a(): globalAndroid.content.SharedPreferences;
          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<globalAndroid.content.SharedPreferences>;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export class m extends dagger.internal.Factory<globalAndroid.os.Handler> {
          public static class: java.lang.Class<com.snapchat.kit.sdk.m>;

          public static a(param0: com.snapchat.kit.sdk.d): dagger.internal.Factory<globalAndroid.os.Handler>;

          public constructor(param0: com.snapchat.kit.sdk.d);

          public a(): globalAndroid.os.Handler;
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module util {
          export class SnapConstants {
            public static class: java.lang.Class<com.snapchat.kit.sdk.util.SnapConstants>;
            public static CLIENT_ID: string;
            public static REDIRECT_URL: string;
            public static SNAPCHAT_PROD_APP_PACKAGE_NAME: string;
            public static SNAPCHAT_MASTER_APP_PACKAGE_NAME: string;
            public static SNAPCHAT_DEBUG_BUCK_APP_PACKAGE_NAME: string;
            public static SNAPCHAT_APP_PACKAGE_NAME: string;
            public static SNAPCHAT_MIN_VERSION_CODE: number;

            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module snapchat {
    export module kit {
      export module sdk {
        export module util {
          export class SnapUtils {
            public static class: java.lang.Class<com.snapchat.kit.sdk.util.SnapUtils>;

            public static isSnapchatInstalled(param0: globalAndroid.content.pm.PackageManager, param1: string): boolean;

            public constructor();

            public static getFileProviderUri(param0: globalAndroid.content.Context, param1: java.io.File): globalAndroid.net.Uri;

            public static getFileProviderAuthority(param0: globalAndroid.content.Context): string;
          }
        }
      }
    }
  }
}

//Generics information:
//com.snapchat.kit.sdk.core.metrics.MetricPublisher:1
//com.snapchat.kit.sdk.core.metrics.MetricQueue:1
//com.snapchat.kit.sdk.core.metrics.a:1
//com.snapchat.kit.sdk.core.metrics.b:1

