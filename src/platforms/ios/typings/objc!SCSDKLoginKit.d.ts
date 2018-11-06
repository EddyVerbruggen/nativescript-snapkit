declare class SCSDKLoginButton extends UIView {

  static alloc(): SCSDKLoginButton; // inherited from NSObject

  static appearance(): SCSDKLoginButton; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): SCSDKLoginButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SCSDKLoginButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SCSDKLoginButton; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SCSDKLoginButton; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SCSDKLoginButton; // inherited from UIAppearance

  static new(): SCSDKLoginButton; // inherited from NSObject

  delegate: SCSDKLoginButtonDelegate;

  constructor(o: { completion: (p1: boolean, p2: NSError) => void; });

  initWithCompletion(completion: (p1: boolean, p2: NSError) => void): this;
}

interface SCSDKLoginButtonDelegate {

  loginButtonDidTap(): void;
}

declare var SCSDKLoginButtonDelegate: {

  prototype: SCSDKLoginButtonDelegate;
};

declare class SCSDKLoginClient extends NSObject {

  static addLoginStatusObserver(observer: SCSDKLoginStatusObserver): void;

  static alloc(): SCSDKLoginClient; // inherited from NSObject

  static applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

  static fetchUserDataWithQueryVariablesSuccessFailure(query: string, variables: NSDictionary<string, any>, success: (p1: NSDictionary<any, any>) => void, failure: (p1: NSError, p2: boolean) => void): void;

  static hasAccessToScope(scope: string): boolean;

  static loginFromViewControllerCompletion(viewController: UIViewController, completion: (p1: boolean, p2: NSError) => void): void;

  static new(): SCSDKLoginClient; // inherited from NSObject

  static removeLoginStatusObserver(observer: SCSDKLoginStatusObserver): void;

  static unlinkAllSessionsWithCompletion(completion: (p1: boolean) => void): void;

  static unlinkCurrentSessionWithCompletion(completion: (p1: boolean) => void): void;

  static readonly isUserLoggedIn: boolean;
}

interface SCSDKLoginStatusObserver extends NSObjectProtocol {

  scsdkLoginDidUnlink?(): void;

  scsdkLoginLinkDidFail?(): void;

  scsdkLoginLinkDidSucceed?(): void;
}

declare var SCSDKLoginStatusObserver: {

  prototype: SCSDKLoginStatusObserver;
};
