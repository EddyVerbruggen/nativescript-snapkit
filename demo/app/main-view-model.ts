import { Observable } from "tns-core-modules/data/observable";
import { alert } from "tns-core-modules/ui/dialogs";
import { LoginKit } from "nativescript-snapkit";

export class HelloWorldModel extends Observable {
  public message: string = "Look at the console log for login results.";

  public isLoggedIn() {
    LoginKit.isLoggedIn(true)
        .then(result => {
          console.log(">>> logged in?.. " + JSON.stringify(result));
        });
  }

  public login() {
    LoginKit.login(true)
        .then(result => {
          console.log(">>> logged in.. " + JSON.stringify(result));
        });
  }

  public logout() {
    LoginKit.logout()
        .then(() => alert("Logged out"));
  }
}
