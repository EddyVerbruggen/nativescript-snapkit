### Building our jar with some glue code
From this folder, run:

```bash
javac -source 1.7 -target 1.7  -d ./ -cp ./build-dependencies/login-classes.jar -sourcepath ./org/nativescript/plugins/snapkit/login ./org/nativescript/plugins/snapkit/login/*.java
jar cfve ../android/TNSSnapKitLib.jar TNSFetchUserDataCallback ./org/nativescript/plugins/snapkit/login/*.class
```
