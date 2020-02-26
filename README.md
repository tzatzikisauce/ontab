# ontabReact
npm install
npm start

# ontabReactNative
Android Studio Simulator

Install Android Studio: https://developer.android.com/studio

After downloading, run the installer.

A dialog box should pop up. Do not Import Settings, Just Click "Ok"

Click “Next" to go thru the Wizard

Click “Next” to do a Standard install

Choose light or dark theme for your editor and click “Next”

Click “Finish”

You will likely get a dialog box pop and say “HAXM Installation wants to make changes”. Enter your password and click OK

If you get a “System Extension Blocked” error, follow the prompt to Open Security Preferences and click “Allow” for “Intel Corporation Apps”

Once the HAXM installer finished you should get a dialog box from Android Studio.

Click “AVD Manager”

Click “Create New Virtual Device”

Select a Device from the list and click “Next”

If the System Image for the most recent SDK is not installed, you will need to click the "Download" link next to the SDK version.

After the image has been downloaded, click “Next”

Preview the settings and then click “Finish”

You should see the newly created device in the “Your Virtual Device” screen.

Click the Play ▶️button all the way to the right in the "Actions" column.

This will open an Android simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

Go to your terminal and in your React Native project directory, run npm start

When the Metro Bundler opens up in your browser, click on the option to “Run on Android simulator”

If you navigate back to your Android simulator you might see a “Permit Drawing Over Other Apps” message. Click the OK button and it should take you to the system settings screen to enable this. You will likely have to go back to the Metro Bundler and select “Run on Android simulator” again.

This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.
