/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module snapchat {
		export module kit {
			export module sdk {
				export class SnapLogin {
					public static class: java.lang.Class<com.snapchat.kit.sdk.SnapLogin>;
					public static getAuthTokenManager(param0: globalAndroid.content.Context): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
					public constructor();
					public static isUserLoggedIn(param0: globalAndroid.content.Context): boolean;
					public static getButton(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public static fetchUserData(param0: globalAndroid.content.Context, param1: string, param2: java.util.Map<string,any>, param3: com.snapchat.kit.sdk.login.networking.FetchUserDataCallback): void;
					public static getLoginStateController(param0: globalAndroid.content.Context): com.snapchat.kit.sdk.core.controller.LoginStateController;
				}
			}
		}
	}
}

declare module com {
	export module snapchat {
		export module kit {
			export module sdk {
				export module login {
					export class LoginComponent {
						public static class: java.lang.Class<com.snapchat.kit.sdk.login.LoginComponent>;
						/**
						 * Constructs a new instance of the com.snapchat.kit.sdk.login.LoginComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loginButtonController(): com.snapchat.kit.sdk.login.b.a;
							loginClient(): com.snapchat.kit.sdk.login.networking.LoginClient;
							snapLoginClient(): com.snapchat.kit.sdk.login.networking.a;
						});
						public constructor();
						public snapLoginClient(): com.snapchat.kit.sdk.login.networking.a;
						public loginButtonController(): com.snapchat.kit.sdk.login.b.a;
						public loginClient(): com.snapchat.kit.sdk.login.networking.LoginClient;
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
				export module login {
					export class a extends com.snapchat.kit.sdk.login.LoginComponent {
						public static class: java.lang.Class<com.snapchat.kit.sdk.login.a>;
						public gson(): com.google.gson.Gson;
						public authTokenManager(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
						public analyticsEventQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.ServerEvent>;
						public clientId(): string;
						public context(): globalAndroid.content.Context;
						public snapLoginClient(): com.snapchat.kit.sdk.login.networking.a;
						public static a(): com.snapchat.kit.sdk.login.a.a;
						public logoutController(): com.snapchat.kit.sdk.core.controller.LoginStateController;
						public redirectUrl(): string;
						public loginButtonController(): com.snapchat.kit.sdk.login.b.a;
						public sharedPreferences(): globalAndroid.content.SharedPreferences;
						public apiFactory(): com.snapchat.kit.sdk.core.networking.ClientFactory;
						public loginClient(): com.snapchat.kit.sdk.login.networking.LoginClient;
						public operationalMetricsQueue(): com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>;
						public kitEventBaseFactory(): com.snapchat.kit.sdk.core.metrics.business.KitEventBaseFactory;
					}
					export module a {
						export class a {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.a>;
							public a(param0: com.snapchat.kit.sdk.SnapKitComponent): com.snapchat.kit.sdk.login.a.a;
							public a(): com.snapchat.kit.sdk.login.LoginComponent;
						}
						export class b extends javax.inject.Provider<com.snapchat.kit.sdk.core.networking.ClientFactory> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.b>;
							public a(): com.snapchat.kit.sdk.core.networking.ClientFactory;
						}
						export class c extends javax.inject.Provider<com.snapchat.kit.sdk.core.networking.AuthTokenManager> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.c>;
							public a(): com.snapchat.kit.sdk.core.networking.AuthTokenManager;
						}
						export class d extends javax.inject.Provider<com.snapchat.kit.sdk.core.controller.LoginStateController> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.d>;
							public a(): com.snapchat.kit.sdk.core.controller.LoginStateController;
						}
						export class e extends javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.e>;
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
				export module login {
					export module a {
						export class a {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.a>;
							public b(param0: string, param1: number): void;
							public constructor(param0: com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>);
							public a(param0: string, param1: number): void;
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
				export module login {
					export module a {
						export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.login.a.a> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.a.b>;
							public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>);
							public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.metrics.MetricQueue<com.snapchat.kit.sdk.core.metrics.model.OpMetric>>): dagger.internal.Factory<com.snapchat.kit.sdk.login.a.a>;
							public a(): com.snapchat.kit.sdk.login.a.a;
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
				export module login {
					export class b {
						public static class: java.lang.Class<com.snapchat.kit.sdk.login.b>;
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
				export module login {
					export module b {
						export class a {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.b.a>;
							public onLoginFailed(): void;
							public onClick(param0: globalAndroid.view.View): void;
							public onLoginSucceeded(): void;
							public onLogout(): void;
							public a(param0: globalAndroid.view.View): void;
							public onLoginStart(): void;
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
				export module login {
					export module b {
						export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.login.b.a> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.b.b>;
							public a(): com.snapchat.kit.sdk.login.b.a;
							public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.AuthTokenManager>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.LoginStateController>, param2: javax.inject.Provider<com.snapchat.kit.sdk.login.a.a>);
							public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.AuthTokenManager>, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.controller.LoginStateController>, param2: javax.inject.Provider<com.snapchat.kit.sdk.login.a.a>): dagger.internal.Factory<com.snapchat.kit.sdk.login.b.a>;
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
				export module login {
					export class c extends dagger.internal.Factory<com.snapchat.kit.sdk.login.networking.LoginClient> {
						public static class: java.lang.Class<com.snapchat.kit.sdk.login.c>;
						public static a(param0: com.snapchat.kit.sdk.login.b, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.ClientFactory>): dagger.internal.Factory<com.snapchat.kit.sdk.login.networking.LoginClient>;
						public a(): com.snapchat.kit.sdk.login.networking.LoginClient;
						public constructor(param0: com.snapchat.kit.sdk.login.b, param1: javax.inject.Provider<com.snapchat.kit.sdk.core.networking.ClientFactory>);
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
				export module login {
					export module dagger {
						export module scope {
							export class LoginScope {
								public static class: java.lang.Class<com.snapchat.kit.sdk.login.dagger.scope.LoginScope>;
								/**
								 * Constructs a new instance of the com.snapchat.kit.sdk.login.dagger.scope.LoginScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
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
				export module login {
					export module models {
						export class ExternalUsersData {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.ExternalUsersData>;
							public constructor();
							public getUsers(): java.util.List<com.snapchat.kit.sdk.login.models.MeData>;
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
				export module login {
					export module models {
						export class GraphQLResponse<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.GraphQLResponse<any>>;
							public constructor();
							public getErrors(): java.util.List<com.snapchat.kit.sdk.login.models.UserDataError>;
							public getData(): T;
							public hasError(): boolean;
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
				export module login {
					export module models {
						export class MeData {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.MeData>;
							public constructor();
							public getExternalId(): string;
							public getBitmojiData(): com.snapchat.kit.sdk.login.models.UserBitmojiData;
							public getDisplayName(): string;
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
				export module login {
					export module models {
						export class MePayload {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.MePayload>;
							public constructor(param0: string, param1: java.util.Map<string,any>);
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
				export module login {
					export module models {
						export class UserBitmojiData {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.UserBitmojiData>;
							public constructor();
							public getId(): string;
							public getAvatar(): string;
							public getPacksJson(): string;
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
				export module login {
					export module models {
						export class UserData {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.UserData>;
							public constructor();
							public getMe(): com.snapchat.kit.sdk.login.models.MeData;
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
				export module login {
					export module models {
						export class UserDataError {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.UserDataError>;
							public constructor();
							public getErrorType(): string;
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
				export module login {
					export module models {
						export class UserDataResponse extends com.snapchat.kit.sdk.login.models.GraphQLResponse<com.snapchat.kit.sdk.login.models.UserData> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.models.UserDataResponse>;
							public constructor();
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
				export module login {
					export module networking {
						export class FetchUserDataCallback extends com.snapchat.kit.sdk.login.networking.SnapLoginClientCallback<com.snapchat.kit.sdk.login.models.UserDataResponse> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.networking.FetchUserDataCallback>;
							/**
							 * Constructs a new instance of the com.snapchat.kit.sdk.login.networking.FetchUserDataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: com.snapchat.kit.sdk.login.models.UserDataResponse): void;
								onFailure(param0: boolean, param1: number): void;
								onSuccess(param0: any): void;
								onFailure(param0: boolean, param1: number): void;
							});
							public constructor();
							public onSuccess(param0: com.snapchat.kit.sdk.login.models.UserDataResponse): void;
							public onSuccess(param0: any): void;
							public onFailure(param0: boolean, param1: number): void;
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
				export module login {
					export module networking {
						export class LoginClient {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.networking.LoginClient>;
							/**
							 * Constructs a new instance of the com.snapchat.kit.sdk.login.networking.LoginClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								fetchMeData(param0: com.snapchat.kit.sdk.login.models.MePayload): retrofit2.Call<com.snapchat.kit.sdk.login.models.UserDataResponse>;
								fetchExternalUsersData(param0: com.snapchat.kit.sdk.login.models.MePayload): retrofit2.Call<com.snapchat.kit.sdk.login.models.GraphQLResponse<com.snapchat.kit.sdk.login.models.ExternalUsersData>>;
							});
							public constructor();
							public fetchExternalUsersData(param0: com.snapchat.kit.sdk.login.models.MePayload): retrofit2.Call<com.snapchat.kit.sdk.login.models.GraphQLResponse<com.snapchat.kit.sdk.login.models.ExternalUsersData>>;
							public fetchMeData(param0: com.snapchat.kit.sdk.login.models.MePayload): retrofit2.Call<com.snapchat.kit.sdk.login.models.UserDataResponse>;
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
				export module login {
					export module networking {
						export class SnapLoginClientCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.networking.SnapLoginClientCallback<any>>;
							/**
							 * Constructs a new instance of the com.snapchat.kit.sdk.login.networking.SnapLoginClientCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: T): void;
								onFailure(param0: boolean, param1: number): void;
							});
							public constructor();
							public onFailure(param0: boolean, param1: number): void;
							public onSuccess(param0: T): void;
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
				export module login {
					export module networking {
						export class a {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.networking.a>;
							public a(param0: string, param1: java.util.Map<string,any>, param2: com.snapchat.kit.sdk.login.networking.FetchUserDataCallback): void;
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
				export module login {
					export module networking {
						export class b extends dagger.internal.Factory<com.snapchat.kit.sdk.login.networking.a> {
							public static class: java.lang.Class<com.snapchat.kit.sdk.login.networking.b>;
							public a(): com.snapchat.kit.sdk.login.networking.a;
							public constructor(param0: javax.inject.Provider<com.snapchat.kit.sdk.login.networking.LoginClient>, param1: javax.inject.Provider<com.snapchat.kit.sdk.login.a.a>);
							public static a(param0: javax.inject.Provider<com.snapchat.kit.sdk.login.networking.LoginClient>, param1: javax.inject.Provider<com.snapchat.kit.sdk.login.a.a>): dagger.internal.Factory<com.snapchat.kit.sdk.login.networking.a>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.snapchat.kit.sdk.login.models.GraphQLResponse:1
//com.snapchat.kit.sdk.login.networking.SnapLoginClientCallback:1

