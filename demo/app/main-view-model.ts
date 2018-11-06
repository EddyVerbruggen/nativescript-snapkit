import { Observable } from "tns-core-modules/data/observable";
import { alert } from "tns-core-modules/ui/dialogs";
import { LoginKit } from "nativescript-snapkit";

export class HelloWorldModel extends Observable {
  public message: string = "Look at the console log for login results.";

  public isLoggedIn() {
    // see the README for a more elaborate example, where you can retrieve user details
    LoginKit.isLoggedIn()
        .then(result => console.log(">>> logged in?.. " + result));
  }

  public login() {
    LoginKit.login(true)
        .then(result => console.log(`Login successful, details: ${JSON.stringify(result)}`))
        .catch(error => console.log(`Login failed. Details: ${error}`));
  }

  public logout() {
    LoginKit.logout()
        .then(() => alert("Logged out"));
  }
}
