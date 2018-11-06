import * as application from "tns-core-modules/application";

// for delegate wiring (without this Snap won't redirect back to the app after logging in)
require('nativescript-snapkit');

application.start({moduleName: "main-page"});
