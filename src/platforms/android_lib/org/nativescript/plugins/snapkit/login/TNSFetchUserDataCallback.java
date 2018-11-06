package org.nativescript.plugins.snapkit.login;

import com.snapchat.kit.sdk.login.networking.FetchUserDataCallback;
import com.snapchat.kit.sdk.login.models.UserDataResponse;

public class TNSFetchUserDataCallback implements FetchUserDataCallback {

  private TNSFetchUserDataCallbackHandler handler;

  public TNSFetchUserDataCallback(TNSFetchUserDataCallbackHandler handler) {
    this.handler = handler;
  }

  public void onSuccess(UserDataResponse response) {
    this.handler.onLoginSuccess(response);
  }

  public void onFailure(boolean p1, int p2) {
    this.handler.onLoginFailure(p1, p2);
  };
}