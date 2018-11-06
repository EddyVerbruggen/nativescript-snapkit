package org.nativescript.plugins.snapkit.login;

import com.snapchat.kit.sdk.login.models.UserDataResponse;

public interface TNSFetchUserDataCallbackHandler {
  void onLoginSuccess(UserDataResponse response);
  void onLoginFailure(boolean p1, int p2);
}
