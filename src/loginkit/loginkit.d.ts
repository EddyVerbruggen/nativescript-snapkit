export interface TNSSnapKitLoginKitResult {
  displayName: string;
  externalId: string;
  avatar?: string;
}

export function isLoggedIn(fetchUserData?: boolean): Promise<boolean | TNSSnapKitLoginKitResult>;

export function login(fetchUserData?: boolean): Promise<TNSSnapKitLoginKitResult>;

export function logout(): Promise<void>;
